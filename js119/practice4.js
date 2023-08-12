// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

/*
Algorithm:

create lowest
create result

use 2 loops to iterate all possible pairs
if absolute value of difference is smaller than lowest
  lowest = abs val of diff
  result = [arr[i], arr[j]]

return result;
*/

function closestNumbers(arr) {
  let lowest = Math.abs(arr[0] - arr[1]) + 1;
  let result;

  for (let i = 0 ; i < arr.length - 1 ; i++) {
    for (let j = i + 1 ; j < arr.length ; j++) {
      let diff = Math.abs(arr[i] - arr[j]);
      if (diff < lowest) {
        lowest = diff;
        result = [arr[i], arr[j]];
      }
    }
  }

  return result;
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]