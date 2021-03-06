module.exports = {
    name: 'calculate',
    sum: null,
    execute(client, message, args, Discord) {
        const s1 = Number(args[0]);
        const s2 = Number(args[2]);
        const operative = args[1];
        if (args.length === 3) {
            switch (operative) {
                case '+':
                    this.sum = s1 + s2
                    break;
                case '-':
                    this.sum = s1 - s2
                    break;
                case '*':
                    this.sum = s1 * s2
                    break;
                case '/':
                    this.sum = s1 / s2
                    break;
                default:
                    message.channel.send(`What? I don't understand`);
                    return

            }
            message.channel.send(`The answer is ${this.sum}, but it's not like I did it for you, BAKA!`);
        } else message.channel.send('B-baka, I have no idea how to do that!');


    }
}