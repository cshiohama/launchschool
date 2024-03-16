/*
Write a function that takes a string as an argument and returns that string 
with every lowercase letter changed to uppercase and every uppercase letter 
changed to lowercase. Leave all other characters unchanged.
*/

function swapCase(str) {
  let result = '';

  for (let char of str) {
    if (char.match(/[a-z]/))
      result += char.toUpperCase();
    else if (char.match(/[A-Z]/))
      result += char.toLowerCase();
    else
      result += char;
  }

  return result;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"