const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const VALID_INPUT = ['r', 'p', 's', 'k', 'l'];
const GAME_WIN = 3;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWelcome() {
  console.clear();
  prompt('Welcome to Rock, Paper, Scissors, Spock, Lizard!');
  prompt('Best out of 5 wins.');
}

function getPlayerChoice() {
  prompt('Choose one: [r]ock, [p]aper, [s]cissors, spoc[k], or [l]izard');
  let choice = readline.question().toLowerCase();

  while (!VALID_INPUT.includes(choice)) {
    prompt("Please enter: r, p, s, k, or l");
    choice = readline.question().toLowerCase();
  }

  return VALID_CHOICES[VALID_INPUT.indexOf(choice)];
}

function generateComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function determineWinner(choice, computerChoice) {
  let player = VALID_CHOICES.indexOf(choice);
  let computer = VALID_CHOICES.indexOf(computerChoice);

  let winner = [
    [0, 2, 1, 2, 1],
    [1, 0, 2, 1, 2],
    [2, 1, 0, 2, 1],
    [1, 2, 1, 0, 2],
    [2, 1, 2, 1, 0]];

  return winner[player][computer];
}

function displayChoices(player, computer) {
  prompt(`You chose ${player} and computer chose ${computer}.`);
}

function displayWinner(winner) {
  if (winner === 1) prompt('You win!');
  else if (winner === 2) prompt('Computer wins!');
  else prompt("It's a tie.");
}

function updateScore(score, winner) {
  if (winner === 1) {
    score.player += 1;
  } else if (winner === 2) {
    score.computer += 1;
  }
}

function displayScore(score) {
  prompt(`Current score: Player ${score.player}, Computer ${score.computer}`);
  prompt('');
}

function displayGameOver(score) {
  if (score.player === GAME_WIN) {
    prompt(`Congratulations, you won the best out of 5!\n`);
  } else {
    prompt('The computer won the best out of 5!  Better luck next time.\n');
  }
}

function newGame() {
  const score = {
    player: 0,
    computer: 0,
  };

  displayWelcome();

  while (score.player < GAME_WIN && score.computer < GAME_WIN) {
    let choice = getPlayerChoice();
    let computerChoice = generateComputerChoice();
    let winner = determineWinner(choice, computerChoice);

    displayChoices(choice, computerChoice);
    displayWinner(winner);
    updateScore(score, winner);
    displayScore(score);
  }

  displayGameOver(score);
}

while (true) {
  newGame();

  prompt('Would you like to play another game? ([y] to continue)');
  if (readline.question().toLowerCase() !== 'y') {
    break;
  }
}