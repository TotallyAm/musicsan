module.exports = {
    name: 'calculate',
    sum: null,
    execute(client, message, args, Discord) {
        const x = Number(args[0]);
        const y = Number(args[2]);
        const operative = args[1];
        if (args.length === 3) {
            switch (operative) {
                case '+':
                    this.sum = x + y
                    break;
                case '-':
                    this.sum = x - y
                    break;
                case '*':
                    this.sum = x * y
                    break;
                case '/':
                    this.sum = x / y
                    break;
                case '^':
                    this.sum = (Math.pow(x, y));
                    break;
                default:
                    message.channel.send(`What? I don't understand`);
                    return

            }
            message.channel.send(`The answer is ${this.sum}, but it's not like I did it for you, BAKA!`);
            console.log(this.sum)
        } else if (!args.length) {
            message.channel.send(`I can calculate basic operations between two numbers in the format 'x, *operative*, y',   :wink:`)
        } else message.channel.send('B-baka, I have no idea how to do that!');


    }
}
