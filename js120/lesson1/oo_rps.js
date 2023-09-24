const readline = require('readline-sync');

function createPlayer(playerType) {
  return {
    // possible state: player name?
    // possible state: player's current move?
    playerType: playerType,
    move: null,

    choose() {
      if (this.isHuman()) {
        let choice;
        
        while (true) {
          console.log('Please choose rock, paper, or scissors:');
          choice = readline.question();
          if (['rock', 'paper', 'scissors'].includes(choice)) break;
          console.log('Sorry, invalid choice.');
        }
        
        this.move = choice;
        
      } else {
        const choices = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
      }
    },
    
    isHuman() {
      return this.playerType === 'human';
    }
  };
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function createMove() {
  return {
    // possible state: type of move (paper, rock, scissors)
  };
}

function createRule() {
  return {
    // possible state? not clear whether Rules need state
  };
}

// Since we don't yet know where to put `compare`, let's define
// it as an ordinary function.
let compare = function(move1, move2) {
  // not yet implemented
};

const RPSGame = {
  human: createPlayer('human`'),
  computer: createPlayer('computer'),
  
  displayWelcomeMessage() {
    console.clear();
    prompt('Welcome to Rock, Paper, Scissors!');
    prompt('Best out of 5 wins.');
  },
  
  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
    console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
},
  
  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors!');
  },
  
  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    this.displayWinner();
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();