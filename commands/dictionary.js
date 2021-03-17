const axios = require('axios');
module.exports = {
    name: 'define',
    word: null,
    language: null,
    async execute(message, args, cmd, client, Discord) {
        {
            //openweathermap api token

            if (args.length === 1) {
                this.language = 'en_GB'
                this.word = args[0]

            } else{
                this.word = args[1]
                this.language = args[0]
            }
            const URL = `https://api.dictionaryapi.dev/api/v2/entries/${this.language}/${this.word}`
            console.log(URL)
            if (args[0] === 'bastard') {
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
                    message.channel.send(`The definition for ${this.word} is '${meaning.definition.toLowerCase()}'`)
                }).catch(err => {
                    message.reply(`Something went wrong, ***${this.word}*** couldn't be found in the ${this.language} dictionary`)
                    console.log(err)
                })
        }
    }
}