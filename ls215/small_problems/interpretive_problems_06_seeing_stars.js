/*
Write a function that displays an 8-pointed star in an nxn grid, where n is an 
odd integer that is supplied as an argument to the function. The smallest such 
star you need to handle is a 7x7 grid (i.e., when n is 7).

PROBLEM
- input: int
- output: strings to console.log

RULES
- input will be an integer larger or equal to 7
- display a pattern of '*'s and spaces on an n x n grid
- pattern is a cross and diagonals

EXAMPLES/TEST CASES
*/

/* 
stars(7) logs

*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

stars(9) logs

*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

DATA STRUCTURES
- 2D n x n array

ALGORITHM
- create n x n array, populate with spaces
- helper function isValid
  - will eval coords to see if they are valid for the grid
    return row >= 0 && row < rows && col >= 0 && col < cols
- rows variable = arr.length
- cols variable = arr[0].length
- center variable = (n - 1) / 2


- iterate veritcal 
- iterate horizontal
- iterate ul diag
- iterate ll diag

- iterate loop
  set row & col
  while isValid(row, col)
    update array
    increment row or col (or both)

- convert array to string and log to console

CODE
*/

function star(n) {
  function isValid(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols;
  }
  
  let arr = [];
  let rows = n;
  let cols = n;
  let center = (n - 1) / 2;

  // create 2d array
  for (let row = 0; row < rows; row++) {
    let temp = [];
    
    for (let col = 0; col < cols; col++) {
      temp.push(' ');
    }

    arr.push(temp);
  }

  // vertical
  let col = center;
  let row = 0;
  
  while (isValid(row, col)) {
    arr[row][col] = '*';
    row++;
  }

  // horizontal
  row = center;
  col = 0;

  while (isValid(row, col)) {
    arr[row][col] = '*';
    col++;
  }

  // diagonal upper left
  row = 0;
  col = 0;

  while (isValid(row, col)) {
    arr[row][col] = '*';
    row++;
    col++;
  }

  // diagonal lower left
  row = 0;
  col = cols - 1;

  while (isValid(row, col)) {
    arr[row][col] = '*';
    row++;
    col--;
  }

  for (let row of arr) {
    console.log(row.join(''))
  }
}

star(7);
star(9);