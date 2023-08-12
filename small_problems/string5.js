function swapCase(str) {
  let result = '';
  
  for (let c of str) {
    if (c === c.toLowerCase())
      result += c.toUpperCase();
    else
      result += c.toLowerCase();
  }
  
  return result;
}

console.log(swapCase('CamelCase'));  // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));  // "tONIGHT ON xyz-tv"