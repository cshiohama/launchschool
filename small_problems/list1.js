function sum(n) {
  return String(n).split('').reduce((a, e) => Number(a) + Number(e));
}

console.log(sum(23));  // 5
console.log(sum(496));  // 19
console.log(sum(123456789));  // 45