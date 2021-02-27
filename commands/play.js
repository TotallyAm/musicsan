const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');





module.exports = {
    name: 'play',
    async execute(client, message, args, Discord) {
        const voiceChannel = message.member.voice.channel;
        //check valid permissions and query
        if (!voiceChannel) return message.channel.send('You need to be in a voice channel, おまえはばか!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You do not have permission to do that ばか');
        if (!permissions.has('SPEAK')) return message.channel.send('You do not have permission to do that ばか');
        if (!args.length) return message.channel.send('You have to tell me what to play!');



        //check for a valid UR
        const validURL = (str) => {
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if (!regex.test(str)) {
                return false;
            } else {
                return true;
            }
        }

        //confirm URL is valid, if valid, stream

        if (validURL(args[0])) {
            message.channel.send('The URL is correct, good effort');

            const connection = await voiceChannel.join();
            const stream = ytdl(args[0], { filter: 'audioonly' });

            connection.play(stream, { seek: 0, volume: 1 })
                .on('finish', () => {
                    voiceChannel.leave();
                });

            await message.reply(`Attempting to play your URL...`)
            return
        } else {
            message.channel.send('Not a URL, searching...')
        }

        //streaming logic
        const connection = await voiceChannel.join();
        const videoFinder = async(query) => {
            const videoResult = await ytSearch(query).catch(console.error);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }
        ffmpeg_options = {
            'options': '-vn',
            "before_options": "-reconnect 1 -reconnect_streamed 1 -reconnect_delay_max 10"
        }
        const options = [
            '-f', 'opus',
            '-ar', '48k',
            '-acodec', 'libopus',
            '-sample_fmt', 's16',
            '-vbr', 'off',
            '-b:a', '64000',
            '-loglevel', 'error',
            '-af', 'volume=0.1',
            'pipe:1'
        ];
        const video = await videoFinder(args.join(''));

        if (video) {
            const stream = ytdl(video.url, { filter: 'audioonly' })
            connection.play(stream, { seek: 0, volume: 1 })
                .on('finish', () => {
                    voiceChannel.leave();
                });

            await message.reply(`Playing ***${video.title}***`)
        } else {
            message.channel.send('No video results found');
        }
    }
}