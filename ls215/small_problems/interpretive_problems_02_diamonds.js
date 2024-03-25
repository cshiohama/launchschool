/*
Write a function that displays a four-pointed diamond in an nxn grid, where n 
is an odd integer supplied as an argument to the function. You may assume that 
the argument will always be an odd integer.

PROBLEM
- input: odd integer
- output: display a diamond composed of '*'s to the console

RULES
- top of diamond starts at center
- middle of diamond expands to n '*'s

EXAMPLES/TEST CASES
*/

/*
diamond(3);

 *
***
 *

diamond(9);

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

DATA STRUCTURES
- strings

ALGORITHM
- rows consist of a number of spaces, followed by a number of '*'s
- spaces are equal to (n - stars) / 2
- start at 1 star
- increase number of stars by 2 for each row, until stars are equal to n
- decrease number of stars by 2 for each row, until stars are equal to 1
- create offset var and set to 2
- create stars var and set to 1

- iterate n times
  console log ' '.repeat(spaces) + '*'.repeat(stars)
  if stars === n
    offset = -2
  stars += offset

CODE
*/

function diamond(n) {
  let stars = 1;
  let offset = 2;

  for (let i = 0; i < n; i++) {
    let spaces = (n - stars) / 2;
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
    
    if (stars === n) {
      offset = -2;
    }

    stars += offset;
  }
}

diamond(9);