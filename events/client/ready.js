module.exports = (Discord, client, message) => {
    console.log('Music-san is online!')
    client.channels.cache.get(`814215449977421895`).send(`I am online`)
}