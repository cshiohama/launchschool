function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);     // one is: two
console.log(`two is: ${two}`);     // two is: three
console.log(`three is: ${three}`); // three is: one

// splice() mutates the original arrrays (pass by reference).