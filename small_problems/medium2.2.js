/*
Algorithm:
- If any sides are 0, return 'invalid'
- If all 3 are the same, return 'equilateral'
- If s1 === s3 or s1 === s2 or s2 === s3, return isosceles
- else return 'scalene'
*/

function triangle(s1, s2, s3) {
  if ([s1, s2, s3].includes(0)) return 'invalid';
  
  let arr = [s1, s2, s3].sort((a, b) => a - b);
  if ((arr[0] + arr[1]) <= arr[2]) return 'invalid';
  
  if (s1 === s2 && s2 === s3) return 'equilateral';
  if (s1 === s3 || s1 === s2 || s2 === s3) return 'isosceles';
  return 'scalene';
}

console.log(triangle(3, 3, 3));  // "equilateral"
console.log(triangle(3, 3, 1.5));  // "isosceles"
console.log(triangle(3, 4, 5));  // "scalene"
console.log(triangle(0, 3, 3));  // "invalid"
console.log(triangle(3, 1, 1));  // "invalid"