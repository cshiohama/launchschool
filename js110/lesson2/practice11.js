let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let arr2 = arr.map(obj => {
  let result = {};
  
  for (let key in obj)
    result[key] = obj[key] + 1;
  
  return result;
})

console.log(arr);
console.log(arr2);