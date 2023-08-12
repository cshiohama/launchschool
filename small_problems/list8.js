function buyFruit(arr) {
  let result = [];
  
  for (let item of arr) {
    for (let i = 0 ; i < item[1] ; i++)
      result.push(item[0]);
  }
  
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]