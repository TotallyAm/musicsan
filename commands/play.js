const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const message = require('../events/guild/message');

const queue = new Map()


module.exports = {
    name: 'play',
    aliases: ['play', 'skip', 'stop'],
    async execute(message, args, cmd, client, Discord) {
        const voiceChannel = message.member.voice.channel;
        //check valid permissions and query
        if (!voiceChannel) return message.channel.send('You need to be in a voice channel, おまえはばか!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You do not have permission to do that ばか');
        if (!permissions.has('SPEAK')) return message.channel.send('You do not have permission to do that ばか');


        const serverQueue = queue.get(message.guild.id)

        switch (cmd) {
            case 'play':

                if (!args.length) return message.channel.send('You have to tell me what to play!');
                let song = {};

                if (ytdl.validateURL(args[0])) {
                    const songInfo = await ytdl.getInfo(args[0]);
                    song = { title: songInfo.videoDetails.title, url: song_info.videoDetails.video_url }
                } else {
                    const videoFinder = async(query) => {
                        const videoResult = await ytSearch(query);
                        return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

                    }

                    const video = await videoFinder(args.join(' '));
                    if (video) {
                        song = { title: video.title, url: video.url }
                    } else {
                        console.log(`Error finding video or url`)
                        message.channel.send('Something went wrong... gomen ne!')
                    }
                }
                if (!serverQueue) {

                    const queueConstructor = {
                        voiceChannel: voiceChannel,
                        textChannel: message.channel,
                        connection: null,
                        songs: []
                    }
                    queue.set(message.guild.id, queueConstructor);
                    queueConstructor.songs.push(song);

                    try {
                        const connection = await voiceChannel.join()
                        queueConstructor.connection = connection;
                        videoPlayer(message.guild, queueConstructor.songs[0]);
                    } catch (err) {
                        queue.delete(message.guild.id);
                        message.channel.send
                        throw err;
                    }
                } else {
                    serverQueue.songs.push(song);
                    return message.channel.send(`I added ${song.title} to the queue, but I didn't do it for you or anything b-baka!`);
                }
                break;


            case 'skip':
                skipSong(message, serverQueue)
                break;
            case 'stop':
                stopSong(message, serverQueue)
                break;

        }



    }
}

const videoPlayer = async(guild, song) => {
    const songQueue = queue.get(guild.id);

    if (!song) {
        songQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, {
        filter: 'audioonly',
        options: '-vn',
        before_options: '-reconnect 1 -reconnect_streamed 1 -reconnect_delay_max 10'

    });
    songQueue.connection.play(stream, { seek: 0, volume: 0.5 })
        .on('finish', () => {
            songQueue.songs.shift()
            videoPlayer(guild, songQueue.songs[0]);
        });
    await songQueue.textChannel.send(`I'm playing ${song.title} now, like it or not!`);
}

const skipSong = (message, serverQueue) => {
    if (!message.member.voice.channel) return message.channel.send('No! You have to be in a voice channel you utter moron!')
    if (!serverQueue) {
        return message.channel.send('But there is nothing to skip?');
    }
    serverQueue.connection.dispatcher.end();
}

const stopSong = (message, serverQueue) => {
    if (!message.member.voice.channel) return message.channel.send('No! You have to be in a voice channel you utter moron!')
    if (!serverQueue) {
        return message.channel.send('But there is nothing to stop');
    }
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}
