module.exports = {
    name: 'rock',
    aliases: ['rock', 'paper', 'scissors'],
    choice: null,
    result: null,
    execute(message, args, cmd) {
        randomNumber = Math.floor(Math.random() * 3 + 1);
        switch (randomNumber) {
            case 1:
                this.choice = 'rock'
                break;
            case 2:
                this.choice = 'paper'
                break;
            case 3:
                this.choice = 'scissors'
                break;
        }
        switch (cmd) {

            case 'rock':
                if (this.choice === 'paper') {
                    this.result = 'I win'
                } else if (this.choice === cmd) {
                    this.result = `It's a tie`
                } else this.result = 'you win'
                break;

            case 'paper':
                if (this.choice === 'scissors') {
                    this.result = 'I win'
                } else if (this.choice === cmd) {
                    this.result = `It's a tie`
                } else this.result = 'you win'
                break;

            case 'scissors':
                if (this.choice === 'rock') {
                    this.result = 'I win'
                } else if (this.choice === cmd) {
                    this.result = `It's a tie`
                } else this.result = 'you win'
                break;
        }
        message.channel.send(`I chose ${this.choice}, ${this.result}!`);

    }
}
