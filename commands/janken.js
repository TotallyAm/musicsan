module.exports = {
    name: 'rock',
    aliases: ['rock', 'paper', 'scissors'],
    choice: null,
    result: null,
    execute(message, args, cmd, client, Discord) {
        const randomNumber = Math.floor(Math.random() * 3);
        //convert the number to a choice
        switch (randomNumber) {
            case 0:
                this.choice = 'rock'
                break;
            case 1:
                this.choice = 'paper'
                break;
            case 2:
                this.choice = 'scissors'
                break;
        }

        function rps(x) {
            if (x === 'rock') return x = 0
            else if (x === 'paper') return x = 1
            else if (x === 'scissors') return x = 2
        }
        const userChoice = rps(cmd);


        if ((userChoice + 1) % 3 === randomNumber) this.result = 'I win'
        else if (userChoice === randomNumber) this.result = `It's a tie`
        else this.result = 'you win'


        console.log(this.result)
        console.log(randomNumber)
        message.channel.send(`I chose ${this.choice}, ${this.result}!`);

    }
}