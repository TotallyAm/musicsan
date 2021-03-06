module.exports = {
    name: 'st',
    async execute(message, args, cmd, client, Discord) {
        const voiceChannel = message.member.voice.channel;

        if (voiceChannel) {
            await voiceChannel.leave();
            await message.channel.send('Okay, I guess I will stop...');
        } else {
            message.channel.send('BAKA, you are not in a voice channel.');
            return
        }
    }
}
