const rl = require('readline-sync');
let arr = [];
let desc = ['1st', '2nd', '3rd', '4th', '5th', 'last'];

for (let i = 0 ; i < desc.length ; i++){
  arr.push(rl.question(`Enter the ${desc[i]} number: `));
}

let last = arr.pop();

if (arr.includes(last))
  console.log(`The number ${last} appears in ${arr}.`);
else
  console.log(`The number ${last} does not appear in ${arr}.`);

