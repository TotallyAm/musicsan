module.exports = {
    name: 'do',
    aliases: ['do', 'are', 'what', 'did', 'is', 'how', 'does', 'if', 'was', 'can', 'should', 'am', 'will',],
    execute(message, args) {
        if (args && message.content.endsWith("?")) {
            const response = [
                'Yes',
                'No',
                'Maybe',
                'Maybe not',
                'Maybe yeah',
                'Prehaps',
                'Go fuck yourself',
                'Hmph, no.',
                'Leave me alone!',
                `I'm not sure`,
                'Yeah',
                'Nah',
                'Error 404, brain not found',
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