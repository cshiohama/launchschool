/*
Algorithm:
- Create copies of both arrays
- Creat result array

- while loop that runs while both arrays are not empty
  - compare first element of each array,
  - shift lowest element and push to result array

- Concat remaining non-empty array to result
- Return result
*/


function merge(arr1, arr2) {
  arr1 = [...arr1];
  arr2 = [...arr2];
  let result = [];
  
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0])
      result.push(arr1.shift());
    else
      result.push(arr2.shift());
  }
  
  result.push(...arr1, ...arr2);
  return result;
}


console.log(merge([1, 5, 9], [2, 6, 8]));  // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));  // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));  // [1, 4, 5]
console.log(merge([1, 4, 5], []));  // [1, 4, 5]