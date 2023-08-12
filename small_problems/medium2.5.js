/*
Algorithm:
- Make validFeatured function
  - Test for divisibility by 7 (true)
  - Test for odd (true)
  - Test for repeating digits (false)
- Featured will iterate n until the next featured number is found
- Will exit when n > 9876543201
*/

function validFeatured(n) {
  if (n % 7 !== 0) return false;
  if (n % 2 !== 1) return false;
  let s = new Set(String(n).split(''));
  return String(n).length === s.size
}

function featured(n) {
  n++;
  
  while (n < 9876543202) {
    if (validFeatured(n))
      return n;
    n++;
  }
  
  return "There is no possible number that fulfills those requirements.";
}

console.log(featured(12));  // 21
console.log(featured(20));  // 21
console.log(featured(21));  // 35
console.log(featured(997));  // 1029
console.log(featured(1029));  // 1043
console.log(featured(999999));  // 1023547
console.log(featured(999999987));  // 1023456987
console.log(featured(9876543186));  // 9876543201
console.log(featured(9876543200));  // 9876543201
console.log(featured(9876543201));  // "There is no possible number that fulfills those requirements."