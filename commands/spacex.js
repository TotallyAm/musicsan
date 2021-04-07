const axios = require('axios');
module.exports = {
  name: 'spacex',
  execute(message, args, cmd, client, Discord) {
    axios
      .get(
        `https://api.spacexdata.com/v4/launches/upcoming`
      )
      .then(response => {
        let apiData = response;
        let name = apiData.data[0].name;
        let description = apiData.data[0].details
        let unixTime = ((apiData.data[0].date_unix) * 1000);

        function timeConverter(t) {
          var d = new Date().getTime();
          var dateHours = (t - d) / 3600000
          if(dateHours < 0) return null
          else if (dateHours < 3) return Math.round(dateHours * 60) + ' ' + 'minutes'
          else if (dateHours > 200) return Math.round(dateHours / 24) + ' ' + 'days'
          else return Math.round(dateHours) + ' ' + 'hours'

        }

        const timeDiff = timeConverter(unixTime);
        console.log(timeDiff)


        if (timeDiff === null) {
          return message.channel.send('I am not sure when the next launch is, check back later');
        } else message.channel.send(`The next official SpaceX launch is ${name}. ${description} This launch will occur in ${timeDiff}`);
      })
  }
}