function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  
  return arr.slice(1).concat(arr[0]);
}

function rotateRightmostDigits(num, n) {
  let arr = String(num).split('');
  let result = '';
  result += arr.slice(0, arr.length - n).join('');
  result += rotateArray(arr.slice(arr.length - n)).join('');
  return Number(result);
}

console.log(rotateRightmostDigits(735291, 1));  // 735291
console.log(rotateRightmostDigits(735291, 2));  // 735219
console.log(rotateRightmostDigits(735291, 3));  // 735912
console.log(rotateRightmostDigits(735291, 4));  // 732915
console.log(rotateRightmostDigits(735291, 5));  // 752913
console.log(rotateRightmostDigits(735291, 6));  // 352917