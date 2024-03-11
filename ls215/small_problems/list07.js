/*
Write a function that returns a list of all substrings of a string that are 
palindromic. That is, each substring must consist of the same sequence of 
characters forwards as backwards. The substrings in the returned list should 
be sorted by their order of appearance in the input string. Duplicate substrings
should be included multiple times.

You may (and should) use the substrings function you wrote in the previous 
exercise.

For the purpose of this exercise, you should consider all characters and pay 
attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' 
are not. In addition, assume that single characters are not palindromes.
*/

function leadingSubstrings(s) {
  return [...s].map((_, index) => s.slice(0, index + 1));
}

function substrings(s) {
  return [...s].map((_, i) => leadingSubstrings(s.substring(i))).flat();
}

function isPalindrome(s) {
  return s.length > 1 && s === [...s].reverse().join('');
}

function palindromes(s) {
  return substrings(s).filter(isPalindrome);
}

console.log(palindromes('abcd'));       //console.log( []);
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
/* 
  [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]
*/ 
console.log(palindromes('knitting cassettes'));
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]