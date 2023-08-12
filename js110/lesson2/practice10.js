let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(ar => {
  if (typeof ar[0] === 'number')
    return ar.slice().sort((a, b) => b - a);
  else
    return ar.slice().sort().reverse();
});


console.log(newArr);
