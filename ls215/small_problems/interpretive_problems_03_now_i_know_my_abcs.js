/*
A collection of spelling blocks has two letters per block, as shown in this 
list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do 
not use both letters from any given block. You can also only use each block 
once.

Write a function that takes a word string as an argument and returns true if the
word can be spelled using the set of blocks, false otherwise. You can consider 
the letters to be case-insensitive when you apply the rules.

PROBLEM
- input: string of words
- output: boolean

RULES
- a word is invalid if it contains 2 or more letters on the same block
- case-insensitive when applying rules

EXAMPLES/TEST CASES
*/

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true

/*

DATA STRUCTURES
- strings/regex
- array for holding blocks

ALGORITHM
- create regex for each block
- match regex to each word
- if match.length > 1, return false
- else return true;
*/

function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  for (let block of blocks) {
    let regex = new RegExp(`[${block}]`, 'gi');
    if ((word.match(regex) ?? []).length > 1)
      return false;
  }

  return true;
}