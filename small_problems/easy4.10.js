function stringToSignedInteger(s) {
  let place = 1;
  let total = 0;
  let negative = 1;
  
  if (s[0] === '+') 
    s = s.slice(1);
  if (s[0] === '-') {
    s = s.slice(1);
    negative = -1;
  }
  
  for (let i = s.length - 1 ; i >= 0 ; i--) {
    let value = place * s[i];
    total += value;
    place *= 10;
  }

  total *= negative;
  return total;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true