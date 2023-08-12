function halvsies(arr) {
  let half = Math.ceil(arr.length / 2);
  let left = arr.slice(0, half);
  let right = arr.slice(half);
  return [left, right];
}

console.log(halvsies([1, 2, 3, 4]));  // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));  // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));  // [[5], []]
console.log(halvsies([]));  // [[], []]