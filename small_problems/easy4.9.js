function stringToInteger(s) {
  let place = 1;
  let total = 0;

  for (let i = s.length - 1 ; i >= 0 ; i--) {
    let value = place * s[i];
    total += value;
    place *= 10;
  }

  return total;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true