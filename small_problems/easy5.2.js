function union(arr1, arr2) {
  let result = [];
  
  for (let n of arr1) {
    if (!result.includes(n))
      result.push(n)
  }
  
  for (let n of arr2) {
    if (!result.includes(n))
      result.push(n)
  }
  
  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]