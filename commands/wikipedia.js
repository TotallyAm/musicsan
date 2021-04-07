const axios = require('axios');
module.exports = {
    name: 'wiki',
    execute(message, args, cmd, client, Discord) {
        const query = args.join('_')
        axios
            .get(
                `https://en.wikipedia.org/api/rest_v1/page/summary/${query}`
            )
            .then(response => {
                let apiData = response;
                message.channel.send(apiData.data.extract)
            }).catch(error => {
                message.reply(`Something went wrong, I can't find ${args.join(' ')} on wikipedia, baka!`);
                console.log(error)
            })
    }
}