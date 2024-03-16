/*
Write a function that takes an array of strings and returns an array of the same
string values, but with all vowels (a, e, i, o, u) removed.
*/

function removeVowels(arr) {
  return arr.map(s => s.replace(/[aeiou]/ig, ''));
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]