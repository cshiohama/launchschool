const readline = require('readline-sync');

let num = readline.question('Please enter an integer greater than 0: ');
let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');

while (operation !== 's' && operation !== 'p') {
  operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
}

let result = 0;

if (operation === 's') {
  for (let i = 1 ; i <= num ; i++) result += i;
  console.log(`The sum of the integers between 1 and ${num} is ${result}.`);
}
else {
  result = 1;
  for (let i = 1 ; i <= num ; i++) result *= i;
  console.log(`The product of integers between 1 and ${num} is ${result}.`);
}


  
  
