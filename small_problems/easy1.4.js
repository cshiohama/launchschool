/*
Build a program that asks the user to enter the length and width 
of a room in meters, and then logs the area of the room to the 
console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the 
readlineSync.prompt method to collect user input.
*/

const readline = require('readline-sync');
console.log('Enter the length of the room in meters:');
let roomLength = readline.question();
console.log('Enter the width of the room in meters:');
let roomWidth = readline.question();

let area = roomLength * roomWidth;
let areaInFeet = (area * 10.7639).toFixed(2);

console.log(`The area of the room is ${area} square meters (${areaInFeet} square feet).`);
