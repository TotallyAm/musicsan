module.exports = (Discord, client, message) => {
    const prefix = 'babe';

    if (message.content.startsWith(prefix)) {

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const cmd = args.shift().toLowerCase();

        const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

        try {
            command.execute(message, args, cmd, client, Discord);
        } catch (err) {
            console.log(err);
            console.log(message.content)
        }
    } else return
}