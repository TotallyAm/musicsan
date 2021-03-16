module.exports = {
    name: 'speed',
    execute(message, args, cmd, client, Discord) {
        speed = Number(args[0])
        //avoiding funky results from the equation
        if(speed > 299792457 || speed < 0 ){
          message.channel.send('Are you trying to do time travel or something? Time is infinitely fast at light speed, and who knows what happens beyond or below, you should know this baka.');
          return
        }
       
        //equation
        b = Math.pow(speed / 299792458, 2);
        y = 1 / Math.sqrt(1 - b);

        
        //should probably expand on this further but it'll do
        if (args.length === 1) {
            dilation = 2-y
            message.channel.send(`At ${speed}m/s, one second would take only ${dilation} seconds`);
        } else message.channel.send('Using the equation γ = 1/sqrt(1-ß^2), the Lorentz transformation, I can calculate time dialtion due to speed. An example command is "speed 50".');

    }
}