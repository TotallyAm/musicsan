module.exports = {
    name: 'calculate',
    sum: null,
    execute(message, args) {
        const x = Number(args[0]);
        const y = Number(args[2]);
        //doesn't really change anything, just thought it was entertaining
        if(x > 10000 || y > 10000){
            message.channel.send(`I'm not wasting brain power on that, fuzakeru na!`);
            return
        }
        const operative = args[1];
        if (args.length === 3) {
            //deciding which maths function to use
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
            //should prevent confusion with the command, in theory
            message.channel.send(`I can calculate basic operations between two numbers in the format 'x, *operative*, y',   :wink:`)
        } else message.channel.send('B-baka, I have no idea how to do that!');


    }
}