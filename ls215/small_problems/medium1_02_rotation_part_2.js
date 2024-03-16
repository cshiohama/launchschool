/*
Write a function that rotates the last n digits of a number. For the rotation, 
rotate by one digit to the left, moving the first digit to the end.
*/

function rotateRightmostDigits(num, n) {
  let arr = String(num).split('');
  let element = arr.splice(arr.length - n, 1);
  arr.push(element);
  return Number(arr.join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917