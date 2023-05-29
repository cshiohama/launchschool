const readline = require('readline-sync');
let loanAmount;
let loanRate;
let loanMonths;
let payment;

function isInvalidNumber(number) {
  return number.trim() === '' ||
    Number(number) < 0 ||
    Number.isNaN(Number(number));
}

function isInvalidNumberOrZero(number) {
  return isInvalidNumber(number) || number === '0';
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function welcome() {
  console.clear();
  prompt('Welcome to the Mortgage Calculator!');
}

function getLoanAmount() {
  prompt('What is the loan amount?');
  loanAmount = readline.question();

  while (isInvalidNumberOrZero(loanAmount)) {
    prompt('Please enter a valid number greater than 0.');
    loanAmount = readline.question();
  }

  loanAmount = Number(loanAmount);
}

function getLoanRate() {
  prompt('What is the annual percentage rate? (enter 3.5 for 3.5%)');
  loanRate = readline.question();

  while (isInvalidNumber(loanRate)) {
    prompt('Please enter a valid number greater than or equal to 0.');
    loanRate = readline.question();
  }

  loanRate = Number(loanRate);
}

function getLoanMonths() {
  prompt('What is the duration of the loan in months?');
  loanMonths = readline.question();

  while (isInvalidNumberOrZero(loanMonths)) {
    prompt('Please enter a valid number greater than 0.');
    loanMonths = readline.question();
  }

  loanMonths = Number(loanMonths);
}

function calculatePayment() {
  if (loanRate === 0) {
    payment = loanAmount / loanMonths;
  } else {
    let monthlyRate = loanRate / 1200;
    payment = loanAmount * (monthlyRate /
      (1 - ((1 + monthlyRate) ** -loanMonths)));
  }
}

function displayPayment() {
  prompt(`Your monthly payment is $${payment.toFixed(2)}`);
  prompt('Thank you for using the Mortgage Calculator!');
}

welcome();
getLoanAmount();
getLoanRate();
getLoanMonths();
calculatePayment();
displayPayment();