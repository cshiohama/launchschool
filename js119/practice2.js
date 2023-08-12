// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

/*
Algorithm:

if arr length < 5 return null
create result array

use a for loop to iterate all 5 element sums and push to result

sort and return result[0]
*/

function minimumSum(arr) {
  if (arr.length < 5) return null

  let result = [];

  for (let i = 5 ; i <= arr.length ; i++)
    result.push(arr.slice(i - 5, i).reduce((acc, ele) => acc + ele));
  
  return result.sort((a, b) => a - b)[0];
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".