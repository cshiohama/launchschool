function stringy(n) {
  let digit = '1';
  let result = '';
  
  while (n > 0) {
    result += digit;
    
    if (digit === '1')
      digit = '0';
    else
      digit = '1';
    
    n--;
  }
  return result;
}

console.log(stringy(6));
console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");