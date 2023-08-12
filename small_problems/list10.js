function transactionsFor(idNum, arr) {
  return arr.filter(obj => obj.id === idNum);
}

function isItemAvailable(item, arr) {
  let total = 0;
  let items = transactionsFor(item, arr);
  
  for (let i of items) {
    if (i.movement === 'in')
      total += i.quantity;
    else
      total -= i.quantity;
  }
  
  return total > 0;
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));  // false
console.log(isItemAvailable(103, transactions));  // false
console.log(isItemAvailable(105, transactions));  // true