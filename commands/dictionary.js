const axios = require('axios');
module.exports = {
    name: 'define',
    async execute(message, args) {
        {
            //openweathermap api token
            const word = args
            const URL = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${word}`
            if (args[0] === 'bastard'){
              message.channel.send('You!')
              return
            }
            axios
                .get(
                    URL
                )
                .then(response => {
                    let data = response.data[0]
                    let define = (data.meanings[0])
                    const meaning = (define.definitions[0])
                    message.channel.send(`The definition for ${word} is '${meaning.definition.toLowerCase()}'`)
                }).catch(err => {
                    message.reply(`Something went wrong, is ***${word}*** even in the dictionary? BAKA`)
                    console.log(err)
                })
        }
    }
}