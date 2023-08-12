function multiplicativeAverage(arr) {
  return (arr.reduce((a, e) => a * e, 1) / arr.length ).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));  // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));  // "28361.667"