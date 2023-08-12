let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

//let arr = Object.keys(munsters).filter(k => munsters[k].gender === 'male').
//  map(k => munsters[k].age).reduce((accum, elem) => accum + elem);
// console.log(arr);

let total = 0;

for (let i in munsters) {
  if (munsters[i].gender === 'male')
    total += munsters[i].age;
}

console.log(total);



