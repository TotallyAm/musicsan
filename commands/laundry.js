module.exports = {
    name: 'do',
    description: "Polo!",
    execute(client, message, args, Discord) {
        //console.log(message.sender)
        if (args[0] === 'laundry') {
            return message.channel.send('B-baka! Do your own laundry :woman_facepalming:');
        } else if (!args.length) {
            return message.channel.send('what?');
        }
    }
}