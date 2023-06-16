/*
Will the code below raise an error?
No - it will extend the array with empty items.
*/

let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers);

let numbers2 = [1, 2, 3];
numbers2[6] = 5;
numbers2[4];  // what will this line return?
console.log(numbers2[4]);

// choosing element 4 will return undefined
// running map() will skip an empty element, but will process
// an undefined one.