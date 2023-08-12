function leadingSubstrings(s) {
  let result = [];
  
  for (let i = 1 ; i <= s.length ; i++)
    result.push(s.slice(0, i));
  
  return result;
}

console.log(leadingSubstrings('abc'));  // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));  // ["a"]
console.log(leadingSubstrings('xyzzy'));  // ["x", "xy", "xyz", "xyzz", "xyzzy"]