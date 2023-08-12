function sequence(n) {
  let result = [];
  
  for (let i = 1 ; i <= n ; i++)
    result.push(i);
  
  return result;
}

console.log(sequence(5));  // [1, 2, 3, 4, 5]
console.log(sequence(3));  // [1, 2, 3]
console.log(sequence(1));  // [1]
