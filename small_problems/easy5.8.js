/* 
- Convert number to string
- Split string into array
- Map array: convert each string into a number
- Return array

*/ 


function digitList(n) {
  return String(n)
    .split('')
    .map(s => Number(s));
}

console.log(digitList(12345));  // [1, 2, 3, 4, 5]
console.log(digitList(7));  // [7]
console.log(digitList(375290));  // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));  // [4, 4, 4]