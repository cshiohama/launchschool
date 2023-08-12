const YEAR = 2023;
const readline = require('readline-sync');

let age = readline.question('What is your age? ');
let retire = readline.question('At what age would you like to retire? ');

console.log(`\nIt's ${YEAR}.  You will retire in ${YEAR + (retire - age)}`);
console.log(`You only have ${retire - age} years of work to go!`);