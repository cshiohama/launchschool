let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let arr2 = arr.slice().sort((a, b) => {
  let aSum = a.filter(n => n % 2 === 1).reduce((acc, ele) => acc + ele);
  let bSum = b.filter(n => n % 2 === 1).reduce((acc, ele) => acc + ele);
  
  return aSum - bSum;
});

console.log(arr);
console.log(arr2);