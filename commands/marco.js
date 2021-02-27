module.exports = {
    name: 'marco',
    description: "Polo!",
    execute(client, message, args, Discord) {
        message.channel.send('Polo!');
    }
}