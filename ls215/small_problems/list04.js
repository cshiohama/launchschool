/*
Write a function that takes an array of numbers and returns the sum of the sums 
of each leading subsequence in that array. Examine the examples to see what we 
mean. You may assume that the array always contains at least one number.
*/

function sumOfSums(arr) {
  let result = 0;

  for (let i = 1; i < arr.length + 1; i++) {
    result += arr.slice(0, i).reduce((a, b) => a + b);
  }

  return result;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35