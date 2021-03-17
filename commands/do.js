module.exports = {
    name: 'do',
    aliases: ['do', 'are', 'what', 'did', 'is', 'how', 'does', 'if', 'was', 'can', 'should', 'am', 'will',],
    execute(message, args) {
        if (args && message.content.endsWith("?")) {
            const response = [
                'Yes',
                'No',
                'Maybe',
                'Go fuck yourself',
                'Hmph, no.',
                'b-baka!',
                'Leave me alone!',
                `I'm not sure`,
                'What do you think',
                'Yeah',
                'Nah',
                'Error 404, brain not found',
                'You wanna know what Millie May has to say? Hmph',
                `I'm not telling you!`,
                'Never!',
                'Of course not!',
                'Of course!',
                'Naturally'

            ]

            function randomResponse(response) {
                return response[Math.floor(Math.random() * (response.length - 1))];
            }
            message.channel.send(randomResponse(response));

        } else return
    }
}