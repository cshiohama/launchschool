function sumOfSums(arr) {
  let total = 0;
  
  for (let i = 1 ; i <= arr.length ; i++) {
    total += arr.slice(0, i).reduce((a, e) => a + e);
  }
  
  return total;
}


console.log(sumOfSums([3, 5, 2]));  // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));  // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));  // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35