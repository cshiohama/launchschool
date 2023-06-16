function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);      // one is: one
console.log(`two is: ${two}`);      // two is: two
console.log(`three is: ${three}`);  // three is: three

// the function variables are only reassigning the shadowed
// variables.  the original arrays are not changed (mutated).