// Create a new array that contains all of the above values, 
// but in an un-nested format:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

flintstones = flintstones.flat();

// flintstones = [].concat(...flintstones);

console.log(flintstones);
