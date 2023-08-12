// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

/*
Algorithm:

create smaller function that returns the number of items in unique smaller than n
create unique array to store unique values

iterate input array and put unique values in unique array
map input array, using smaller as callback
*/

function smallerNumbersThanCurrent(arr) {
  function smaller(n) {
    let result = 0;

    for (let k of unique)
      if (k < n)
        result++;
    
    return result;
  }

  let unique = [];

  for (let n of arr)
    if (!unique.includes(n))
      unique.push(n);
  
  return arr.map(n => smaller(n));
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]