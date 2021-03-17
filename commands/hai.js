module.exports = {
    name: 'hi',
    aliases: ['hai', 'ohayo', 'moshimoshi?', 'hello', 'はい?'],
    execute(message) {
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
        message.channel.send(randomResponse(response));
    }
}