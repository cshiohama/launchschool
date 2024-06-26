const rl = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
let computeCount = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  // console.clear();
  
  // console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square; 

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = rl.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let moves = emptySquares(board);
  let highestScore = analyzeMoves(board, moves[0]);
  let highestMove = moves[0];
  
  console.log(`${highestMove} = ${highestScore}`);
  
  for (let i = 1 ; i < moves.length ; i++){
    let score = analyzeMoves(board, moves[i]);
    
    console.log(`${moves[i]} = ${score}`);
    
    if (score > highestScore) {
      highestScore = score;
      highestMove = moves[i];
    }
  }
  
  console.log(computeCount);
  
  board[highestMove] = COMPUTER_MARKER;  
  
  /*
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
  */
}

function analyzeMoves(board, nextMove) {
  computeCount++;
  let total = 0;
  let newBoard = {...board};
  newBoard[nextMove] = emptySquares(newBoard).length % 2 === 0 ? 
    COMPUTER_MARKER : HUMAN_MARKER;
  
  if (boardFull(newBoard)) return 0;
  
  if (someoneWon(newBoard)){
    if (detectWinner(newBoard) === 'Player')
      return -20;
    else
      return 10;
  }
  
  for (let move of emptySquares(newBoard)) {
    total += analyzeMoves(newBoard, move);
  }
  
  return total;
  
    
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function startNewGame() {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);
    
    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
    
    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);
    
  if (someoneWon(board))
    prompt(`${detectWinner(board)} won!`)
  else
    prompt("It's a tie!");
}

startNewGame();