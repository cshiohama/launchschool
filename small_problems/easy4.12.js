function signedIntegerToString(n) {
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  let sign = '';
  
  if (n > 0) sign = "+";
  if (n < 0) {
    sign = '-';
    n *= -1;
  }
  
  do {
    let digit = n % 10;
    n = Math.floor(n / 10);
    result =  arr[digit] + result;
  }  while (n > 0);
  
  return sign + result;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");