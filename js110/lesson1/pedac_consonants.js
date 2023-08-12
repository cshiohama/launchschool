/*
Problem:
- Input: Array of strings
- Output: Sorted array of strings

- Strings are sorted by their number of adjacent consonants
- Spaces are disregarded for adjacency
- Strings retain their original order if they contain the same number of consonants.

Examples / Test Cases:
- Sort is descending order (highest first)
- All strings are lower case

Data Structures:
- Use a 2D array to store results
  - Index is number of adjacents
  - Nested array used to store multiple strings with the same value
    (This will preserve original order when strings share the same number)

Algorithm:
- Create function that returns number of adjacent consonants
  - Remove all spaces from string
  - Create counter to keep track of number of adj.
  - Create highest counter to record highest value in string
  - Iterate string and iterate counter when consonants are adj.
  - Disregard any score of 1
- Put the string in the 2D array based on score
- Second dimension array will contain strings in their original order
*/

function sortStringsByConsonants(arr) {
  function adjacentConsonants(s) {
    let count = 0;
    let highest = 0;
    s = s.split(' ').join('');
    for (let c of s) {
      if ('bcdfghjklmnpqrstvwxyz'.includes(c)) {
        count++;
        if (count > highest)
          highest = count;
      } else {
        count = 0;
      }
    }
    
    return highest > 1 ? highest : 0;
  }
  
  let result = [];
  
  for (let s of arr) {
    let count = adjacentConsonants(s);
    if (Array.isArray(result[count]))
      result[count].unshift(s);
    else
      result[count] = [s];
  }
  
  return result.flat().reverse();
  
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']