const readline = require('readline-sync');

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adj = readline.question('Enter an adjective: ');
let adv = readline.question('Enter an adverb: ');

console.log(`\nThe ${adj} ${noun} ${verb} ${adv} to the concert.`);