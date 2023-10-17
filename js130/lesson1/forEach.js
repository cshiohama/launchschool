function forEach(arr, callback) {
  for (let n of arr) {
    callback(n);
  }
}


let arr = [1, 2, 3, 4];

// Array.prototype.forEach
arr.forEach(value => console.log(value * value));

// Our forEach function
forEach(arr, value => console.log(value * value));