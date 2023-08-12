const readline = require('readline-sync');

let name = readline.question('What is your name? ');

if (name.endsWith('!'))
  console.log(`HELLO ${name.toUpperCase().slice(0, name.length - 1)}. WHY ARE WE SCREAMING?`);
else
  console.log(`Hello ${name}.`);