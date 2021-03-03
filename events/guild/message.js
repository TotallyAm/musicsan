module.exports = (Discord, client, message, ) => {
    const prefix = 'babe';

    if (message.content.startsWith(prefix)) {

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const cmd = args.shift().toLowerCase();

        const command = client.commands.get(cmd);

        if (command) command.execute(client, message, args, Discord);

        console.log(message.content)
    } else return
}
