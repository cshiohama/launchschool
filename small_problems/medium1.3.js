function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  
  return arr.slice(1).concat(arr[0]);
}

function rotateRightmostDigits(num, n) {
  let arr = num.split('');
  let result = '';
  result += arr.slice(0, arr.length - n).join('');
  result += rotateArray(arr.slice(arr.length - n)).join('');
  return result;
}

function maxRotation(num) {
  let str = String(num);
  
  for (let i = str.length ; i >= 2 ; i--) {
    str = rotateRightmostDigits(str, i);
  }
  
  return Number(str);
}

console.log(maxRotation(735291));  // 321579
console.log(maxRotation(3));  // 3
console.log(maxRotation(35));  // 53
console.log(maxRotation(105));  // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));  // 7321609845
