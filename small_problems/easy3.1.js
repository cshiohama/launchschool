function crunch(str) {
  let crunched = '';
  if (str) crunched = str[0];
  
  for (let i = 1 ; i < str.length ; i++){
    if (str[i] !== str[i - 1])
      crunched += str[i];
  }
  return crunched;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""