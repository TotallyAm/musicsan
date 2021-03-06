const ffmpeg = require('ffmpeg-static');
const fs = require('fs');
const path = require('path');



module.exports = {
    name: 'playlist',
    connection: null,
    audioDir: path.join(process.cwd(), 'music'),
    music: null,
    dispatcher: null,
    async execute(message, args, cmd, client, Discord) {
        try {
            const voiceChannel = message.member.voice.channel;

            if (!voiceChannel) {
                return message.channel.send('You are not in a voice channel');
            } else {
                this.connection = await message.member.voice.channel.join();

                if (this.music === null)
                    this.music = fs.readdirSync(this.audioDir);

                this.play();
            }
        } catch (err) {
            console.log(err)
        }
    },
    play: function() {
        const pickedSong = this.randomMusic();

        //check if dispatcher has already been made
        if (this.dispatcher !== null)
            this.dispatcher.end();

        this.dispatcher = this.connection.play(fs.createReadStream(pickedSong), { seek: 0, volume: .4 });

        this.dispatcher.once('start', () => {
            console.log('Now playing: ', pickedSong);
        });

        this.dispatcher.once('finish', () => {
            this.play()
        });
    },
    randomMusic: function() {

        const name = this.music[Math.floor(Math.random() * (this.music.length - 1))];

        return path.join(this.audioDir, name);
    }

}
