module.exports = {
    name: 'musicsan?',
    execute(client, message, args, Discord) {
        const response = [
            'はい？',
            '今は何だ、ばか？',
            'Your mum',
            'Nandesuka?',
            'Slut',
            'Whats up?',
            'Hai, I am here',
            'Bonjour',
            'Tadaimasu',
            'B-b-baka!',
            'Bich say what?',
            'Shrek 3 was a mistake',
            'world.execute(me)'

        ]

        function randomResponse(response) {
            return response[Math.floor(Math.random() * (response.length - 1))];
        }
        console.log(randomResponse(response));
        message.channel.send(randomResponse(response));
    }
}

//'はい？'
/*randomNumber2 = Math.floor(Math.random() * 4 + 1);
console.log(randomNumber);
if (randomNumber === 1) {
    message.channel.send('はい？');
} else if (randomNumber === 2) {
    message.channel.send('今は何だ、ばか？');
} else if (randomNumber === 3) {
    message.channel.send('Your mum');
} else {
    message.channel.send('Nandesuka?')
} */