let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let arr2 = arr.filter(o => {
  return Object.values(o).every(arr => {
    return arr.every(n => n % 2 ===0)});
})

console.log(arr2);