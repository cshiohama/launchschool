function transpose(arr) {
  let rows = arr.length;
  let cols = arr[0].length;
  let arr2 = [];

  for (let col = 0; col < cols; col++) {
    let temp = [];
    for (let row = 0; row < rows; row++) {
      temp.push('.');
    }
    arr2.push(temp);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      arr2[col][row] = arr[row][col];
    }
  }

  return arr2;
}

console.log(transpose([[1, 2, 3, 4]]));;            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));;      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));;                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));;
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]