// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);        // false
console.log(Number.isNaN(nanArray[0]));  // true

// You can't use == or === to test for NaN, use isNaN() instead.