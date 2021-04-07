var scraper = require('images-scraper');

const  google = new scraper({
    puppeteer: {
        headless: true,
    }
})

module.exports = {
    name: 'find',
    async execute(message, args, cmd, client, Discord){
        const imageQuery = args.join(' ');
        console.log(imageQuery)
        if(!imageQuery) return message.channel.send('What do you want me to search for?');


        const imageResults = await google.scrape(imageQuery, 50)
         const image = imageResults[Math.floor(Math.random() * (imageResults.length - 1))];
         if(!image) return message.channel.send(`I couldn't find anything for that, sorry.`)
        message.channel.send(image.url)
        console.error();


    
    }
    
}
