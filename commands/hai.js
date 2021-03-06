module.exports = {
    name: 'hi',
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

