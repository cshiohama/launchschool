/*
Leftover Blocks

You have a number of building blocks that can be used to build a valid structure. 
There are certain rules about what determines the validity of a structure:

    The building blocks are cubes
    The structure is built in layers
    The top layer is a single block
    A block in an upper layer must be supported by four blocks in a lower layer
    A block in a lower layer can support more than one block in an upper layer
    You cannot leave gaps between blocks

Write a program that, given the number for a specific amount of cubes, 
calculates the number of blocks left over after building the tallest possible 
valid structure.

Problem: 
- Input: number of blocks provided
- Output: leftover number of blocks after building highest possible structure

- First layer will have 1 block
- Second layer will have 4 blocks
- Third layer will have 9 blocks
- ...

- Each layer will require layer x layer blocks.

Examples / Test Cases: 
- Test cases confirm each layer should require layer squared blocks.

Data Structures:
- Problem can be solved with numeric calculations only. No data strcutures needed.

Algorithm:
- Start with number of blocks provided and build layers until the required
  blocks for the next level is greater than the blocks available.  The number 
  of blocks available is the answer.
*/

function calculateLeftoverBlocks(blocks) {
  let layer = 1;
  
  while (blocks >= layer ** 2)
    blocks -= layer++ ** 2;
  
  return blocks;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true