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

console.log(substrings('abcde'));