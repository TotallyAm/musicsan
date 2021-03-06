module.exports = {
    name: 'coinflip',
    description: "generates random number",
    execute(client, message, args, Discord) {
        randomNumber = Math.floor(Math.random() * 2 + 1);
        console.log(randomNumber)
        if (randomNumber === 1) {
            message.channel.send('Heads')
        } else message.channel.send('Tails')
    }
}
