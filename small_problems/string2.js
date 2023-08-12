function removeVowels(arr) {
  return arr.map(str => {
    return str.split('').filter(c => !'aeiouAEIOU'.includes(c)).join('');
  })
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));  // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));  // ["BC", "", "XYZ"]