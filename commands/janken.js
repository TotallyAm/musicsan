module.exports = {
    name: 'rock',
    aliases: ['rock', 'paper', 'scissors'],
    result: null,
    execute(message, args, cmd) {
        randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log(randomNumber)
        switch(randomNumber) {
            case 1:
                this.result = 'rock'
                break;
            case 2:
                this.result = 'paper'
                break;
            case 3:
                this.result = 'scissors'
                break;
        }
        switch(cmd){
        
         case 'rock':
                if(this.result === 'paper'){
                    message.channel.send(`I chose ${this.result}, you lose!`)
                } else message.channel.send(`I chose ${this.result}, you win!`)
                break;
        
         case 'paper':
                if(this.result === 'scissors'){
                    message.channel.send(`I chose ${this.result}, you lose!`)
                } else message.channel.send(`I chose ${this.result}, you win!`)
                break;
            
         case 'scissors':
                    if(this.result === 'rock'){
                        message.channel.send(`I chose ${this.result}, you lose!`)
                    } else message.channel.send(`I chose ${this.result}, you win!`)
                    break;
        }

    }
}