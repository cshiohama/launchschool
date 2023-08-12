function doubleConsonants(str) {
  return str
    .split('')
    .map(c => {
      return 'bcdfghjklmnpqrstvwxyz'.includes(c.toLowerCase()) ? c + c : c;
    })
    .join('');
}

console.log(doubleConsonants('String'));  // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));  // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));  // "JJullyy 4tthh"
console.log(doubleConsonants(''));  // ""