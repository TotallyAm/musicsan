require('dotenv').config();
const axios = require('axios');
module.exports = {
    name: 'weather',
    async execute(message, args, cmd, client, Discord) {
        {
            //openweathermap api token
            const apiKey = process.env.WEATHER_API_TOKEN
            const location = args.join(' ')
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
                )
                .then(response => {
                    let apiData = response;
                    //useful data from api
                    let currentTemp = Math.ceil(apiData.data.main.temp)
                    let feelsLike = apiData.data.main.feels_like
                    let humidity = apiData.data.main.humidity;
                    let wind = Math.round(apiData.data.wind.speed * 3.6);
                    let windDir = apiData.data.wind.deg;
                    let country = apiData.data.sys.country;
                    let pressure = apiData.data.main.pressure;
                    let weatherType = apiData.data.weather[0].description.toUpperCase();
                    let cloudiness = apiData.data.clouds.all;
                    let iconID = apiData.data.weather[0].icon;
                    let city = apiData.data.name;
                    const icon = (`https://openweathermap.org/img/w/${iconID}.png`)
                    const windMph = Math.round(wind / 1.609344);
                    let timezone = apiData.data.timezone
                    //api returns unix time, this function will convert it to a 24h format and convert to local time
                    function unixConverter(t) {
                        var date = new Date((t * 1000) + (timezone * 1000));
                        var hours = date.getHours();
                        var minutes = "0" + date.getMinutes();
                      return  hours + ':' + minutes.substr(-2);
   



                    }
                    const sunset = unixConverter(apiData.data.sys.sunset);
                    const sunrise = unixConverter(apiData.data.sys.sunrise);

                    //discord embed
                    const weatherEmbed = new Discord.MessageEmbed()

                    .setColor('#8899ee')
                        .setTitle(`Weather in ${city}, ${country}`)
                        .setThumbnail(icon)
                        .setDescription(weatherType)
                        .addFields({ name: 'Current Temperature', value: `${currentTemp}C.`, inline: true },
                         { name: 'Feels Like', value: `${feelsLike}C.`, inline: true }, 
                         { name: 'Wind', value: `${wind}km/h, or ${windMph}mph at ${windDir} degrees.` },
                         { name: 'Humidity', value: `${humidity}%.`, inline: true },
                         { name: 'Pressure', value: `${pressure}hPa.`, inline: true }, 
                         { name: 'Cloudiness', value: `${cloudiness}%.` },
                         { name: 'Sunrise', value: sunrise, inline: true},
                         { name: 'Sunset', value: sunset, inline: true}


                        )

                    message.channel.send(weatherEmbed);


                }).catch(err => {
                    message.reply(`Something went wrong, is ${location} even real? BAKA!`);
                    console.log(err)
                })

        }
    }
}