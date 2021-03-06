require('dotenv').config();
const axios = require('axios');
module.exports = {
    name: 'weather',
    async execute(client, message, args, Discord) {
        {
            const apiKey = process.env.WEATHER_API_TOKEN
            const location = args[0]
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
                )
                .then(response => {
                    let apiData = response;
                    let currentTemp = Math.ceil(apiData.data.main.temp)
                    let maxTemp = apiData.data.main.temp_max;
                    let minTemp = apiData.data.main.temp_min;
                    let humidity = apiData.data.main.humidity;
                    let wind = apiData.data.wind.speed;
                    let author = message.author.username
                    let profile = message.author.displayAvatarURL
                    let icon = apiData.data.weather[0].icon
                    let country = apiData.data.sys.country
                    let pressure = apiData.data.main.pressure;
                    let cloudness = apiData.data.weather[0].description;
                    message.channel.send(`Okay ${author}, the temperature in ${location} is ${currentTemp}C, the wind and humidty is currently ${wind}km/h and ${humidity}% respectively.`);
                }).catch(err => {
                    message.reply(`Something went wrong, is ${location} even real? BAKA!`);
                })

        }
    }
}