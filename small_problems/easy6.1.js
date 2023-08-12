function repeater(str) {
  return str
    .split('')
    .map(c => c + c)
    .join('');
}

console.log(repeater('Hello'));  // "HHeelllloo"
console.log(repeater('Good job!'));  // "GGoooodd  jjoobb!!"
console.log(repeater(''));  // ""