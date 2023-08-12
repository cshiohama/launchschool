const interleave = function(arr1, arr2) {
  let result = [];
  while(arr1.length > 0){
    result.push(arr1.shift());
    result.push(arr2.shift());
  }
  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));  // [1, "a", 2, "b", 3, "c"]