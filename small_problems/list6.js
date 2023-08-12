function leadingSubstrings(s) {
  let result = [];
  
  for (let i = 1 ; i <= s.length ; i++)
    result.push(s.slice(0, i));
  
  return result;
}

function substrings(s) {
  let result = [];
  
  for (let i = 0 ; i < s.length ; i++) {
    result.push(leadingSubstrings(s.slice(i)));
  }
  
  return result.flat();
}

function palindromes(s) {
  let result = [];

  for (let p of substrings(s))
    if (p.length >= 2 && p === p.split('').reverse().join(''))
      result.push(p);
    
  return result;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]