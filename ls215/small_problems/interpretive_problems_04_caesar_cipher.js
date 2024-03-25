/*
Write a function that implements the Caesar Cipher. The Caesar Cipher is one of 
the earliest and simplest ways to encrypt plaintext so that a message can be 
transmitted securely. It is a substitution cipher in which each letter in a 
plaintext is substituted by the letter located a given number of positions away 
in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions,
it will be substituted with the letter 'D'. This shift value is often referred 
to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this 
key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). 
Any other character is left as is. The substituted letters are in the same 
letter case as the original letter. If the key value for shifting exceeds the 
length of the alphabet, it wraps around from the beginning.

PROBLEM:
- input: string, number of positions to shift
- output: encoded string

RULES:
- only encrypt letters, leave other characters as is
- preserve case when encoding
- if shifted value exceeds alphabet, wrap to beginning

EXAMPLES/TEST CASES:
*/

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

/*
DATA STRUCTURES:
- array to map to index number

ALGORITHM:
- create result string, assign to ''
- split alphabet into array and use index numbers to shift
- iterate input string character by character
  - if character is not a letter
    - append to result string as is
  - else
    - convert to uppercase and find index number in array
    - increase index number by offset
    - if index > 25, substract 26 from index
    - if character is lowercase
      - append encoded character to result as lowercase
    - else
      - apprend encoded character to result as uppercase
- return result string

CODE:
*/

function caesarEncrypt(str, offset) {
  let result = '';
  let arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  for (let cha of str) {
    if (!/[a-z]/i.test(cha)) {
      result += cha;
    } else {
      let index = arr.indexOf(cha.toUpperCase());
      index += offset;
      
      if (index > 25) index -= 26;

      if (/[a-z]/.test(cha)) {
        result += arr[index].toLowerCase();
      } else {
        result += arr[index];
      }
    }
  }

  return result;
}