/*
Algorithm:
- put sides into array
- if sum of array does not equal 180, return 'invalid'
- sort array
- if any angles are 0, return 'invalid'
- if 90 is in the array, return 'right'
- if arr[2] > 90, return 'obtuse'

*/

function triangle(s1, s2, s3) {
  let arr = [s1, s2, s3];
  if (arr.reduce((a, e) => a + e) !== 180) return 'invalid';
  arr.sort((a, b) => a - b);
  if (arr[0] === 0) return 'invalid'
  if (arr.includes(90)) return 'right'
  if (arr[2] > 90) return 'obtuse';
  return 'acute'
}

console.log(triangle(60, 70, 50));  // "acute"
console.log(triangle(30, 90, 60));  // "right"
console.log(triangle(120, 50, 10));  // "obtuse"
console.log(triangle(0, 90, 90));  // "invalid"
console.log(triangle(50, 50, 50));  // "invalid"