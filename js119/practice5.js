// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

/*
Algorithm:

create object d to track character frequency counts
create lowest variable
create result array to hold characters that appear the least

convert input to lowercase
store frequency counts in d
sort object values to find lowest occurrance
iterate object keys to find ones with lowest occurrance and push them to result

iterate input string and return the first character that appears in result

*/

function leastCommonChar(str) {
  let d = {};
  let lowest;
  let result = [];

  str = str.toLowerCase();

  for (let c of str)
    d[c] ? d[c]++ : d[c] = 1;

  lowest = Math.min(...Object.values(d));

  for (let key in d)
    if (d[key] === lowest)
      result.push(key);
  
  for (let c of str)
    if (result.includes(c))
      return c;
}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".