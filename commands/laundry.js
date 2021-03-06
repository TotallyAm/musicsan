module.exports = {
    name: 'do',
    execute(message, args, cmd, client, Discord) {
        if (args[0] === 'laundry') {
            return message.channel.send('B-baka! Do your own laundry :woman_facepalming:');
        } else if (!args.length) {
            return message.channel.send('what?');
        }
    }
}
