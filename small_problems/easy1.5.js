const readline = require('readline-sync');

let bill = Number(readline.question('What is the bill? '));
let tipPercent = Number(readline.question('What is the tip percentage? '));

let tipAmount = Number(bill * (tipPercent / 100));
let total = bill + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);