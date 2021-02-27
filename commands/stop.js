module.exports = {
    name: 'stop',
    async execute(client, message, args, Discord) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('BAKA, you are not in a voice channel.');
        await voiceChannel.leave();
        await message.channel.send('Okay, I guess I will stop...');
    }
}