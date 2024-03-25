/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. 
It uses a series of Caesar Ciphers based on the letters of a keyword. Each 
letter of the keyword is treated as a shift value. For instance, the letter 'B' 
corresponds to a shift value of 1, and the letter 'd' corresponds to a shift 
value of 3. In other words, the shift value used for a letter is equal to its 
index value in the alphabet. This means that the letters 'a'-'z' are equivalent 
to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying
the current shift value to a Caesar Cipher for that particular character. To 
make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

PROBLEM:
- input: plaintext, keyword
- output: encoded phrase

RULES:
- keyword is used as a rotating encryption key
- the letters in the keyword determin how much to offset each character by
- a = 0, z = 25 (case insensitive)

EXAMPLES/TEST CASES:
*/
console.log(vigenere("Pineapples don't go on pizzas!", 'A'));
// Pineapples don't go on pizzas!

console.log(vigenere("Pineapples don't go on pizzas!", 'Aa'));
// Pineapples don't go on pizzas!

console.log(vigenere("Pineapples don't go on pizzas!", 'cab'));
// Riogaqrlfu dpp't hq oo riabat!

console.log(vigenere("Pineapples don't go on pizzas!", 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!

/*
DATA STRUCTURES:
- array to store index values

ALGORITHM:
- create result string, init to ''
- split alphabet into array
- create keywordIndex, init to 0
- iterate string by character
- if character not a letter
  - add to result as is
- else
  - get index number for current character
  - offset is equal to arr index of keyword[keywordIndex]
  - add offset to index
  - increment keywordIndex
  - if keywordIndex equals keyword.length
    - keywordIndex = 0
  - if index > 25
    - subtract 26 from index
  - if character is lowercase
    - append arr[index].toUpperCase()
  - else
    - append arr[index];
- return result

CODE:
*/

function vigenere(plaintext, keyword) {
  keyword = keyword.toUpperCase();
  let result = '';
  let arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let keywordIndex = 0;

  for (let cha of plaintext) {
    if (/[^a-z]/i.test(cha)) {
      result += cha;
    } else {
      let index = arr.indexOf(cha.toUpperCase());
      let offset = arr.indexOf(keyword[keywordIndex]);
      index += offset;
      if (index > 25)
        index -= 26;

      if (/[a-z]/.test(cha)) {
        result += arr[index].toLowerCase();
      } else {
        result += arr[index];
      }

      keywordIndex++;
      if (keywordIndex === keyword.length)
        keywordIndex = 0;
    }
  }

  return result;
}