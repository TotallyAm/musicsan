module.exports = {
    name: 'random',
    description: "generates random number",
    execute(client, message, args, Discord) {
        randomNumber = Math.floor(Math.random() * 4 + 1);
        message.channel.send(randomNumber);
    }
}