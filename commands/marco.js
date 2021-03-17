module.exports = {
    name: 'marco',
    description: "polo",
    execute(message, args, cmd, client, Discord) {
        message.channel.send('Polo!');
    }
}