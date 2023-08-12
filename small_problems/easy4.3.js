function isRealPalindrome(s) {
  let valid = 'abcdefghijklmnopqrstuvwxyz';
  s = s.toLowerCase().split('').filter(c => valid.includes(c)).join('');
  return s === s.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false