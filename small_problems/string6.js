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

function staggeredCase(str) {
  str = str.toLowerCase();
  let upper = true;
  let result = '';
  
  for (let c of str) {
    if ('abcdefghijklmnopqrstuvwxyz'.includes(c)) {
      if (upper) {
        result += c.toUpperCase();
        upper = false;
      } else {
        result += c;
        upper = true;
      }
    } else {
      result += c;
      upper = upper ? false : true;
    }
  }
  
  return result;
}

console.log(staggeredCase('I Love Launch School!'));  // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));  // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));  // "IgNoRe 77 ThE 4444 nUmBeRs"