module.exports = {
    name: 'coinflip',
    description: "does a coin flip",
    execute(message) {
        randomNumber = Math.floor(Math.random() * 2 + 1);
        console.log(randomNumber)
        //placeholder images
        if (randomNumber === 1) {
            message.channel.send('Heads')
            message.channel.send('https://upload.wikimedia.org/wikipedia/en/a/a1/British_one_penny_coin_2016_obverse.png')
        } else {
            message.channel.send('Tails')
            message.channel.send('https://upload.wikimedia.org/wikipedia/en/f/f3/British_one_penny_coin_2015_reverse.png')
        }
    }
}