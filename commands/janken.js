module.exports = {
  name: 'rock',
  aliases: ['rock', 'paper', 'scissors'],
  choice: null,
  result: 'you win',
  execute(message, args, cmd, client, Discord) {
    randomNumber = Math.floor(Math.random() * 3);
    //generate the equivalent name of each random number generated, the numerical form is still used for the algorithm
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

    //function to convert the command to a set numerical value equivalent of the randomNumer variable
    function rps(x) {
      if (x === 'rock') return x = 0
      else if (x === 'paper') return x = 1
      else if (x === 'scissors') return x = 2
    }
    const userChoice = rps(cmd);

    //algorithm to determine the outcome of rock paper scissors numerically
    if ((userChoice + 1) % 3 === randomNumber) this.result = 'I win'
    else if (userChoice === randomNumber) this.result = `It's a tie`

    message.channel.send(`I chose ${this.choice}, ${this.result}!`);

  }
}