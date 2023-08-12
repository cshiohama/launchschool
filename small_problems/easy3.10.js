function century(n) {
  if (n % 1000 === 0) 
    n -= 1;
  
  if (n < 1000) return "1st";
  if (n < )
}

console.log(century(2000));  // "20th"
console.log(century(2001));  // "21st"
console.log(century(1965));  // "20th"
console.log(century(256));  // "3rd"
console.log(century(5));  // "1st"
console.log(century(10103));  // "102nd"
console.log(century(1052));  // "11th"
console.log(century(1127));  // "12th"
console.log(century(11201));  // "113th"