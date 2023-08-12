/*
Algorithm:
- Declare fib1 = 0n, fib2 = 1n, temp, counter = 1;
- While ()
*/ 

function findFibonacciIndexByLength(n) {
  let fib1 = 0n;
  let fib2 = 1n;
  let temp;
  let counter = 0n;
  
  while (true) {
    if (BigInt((String(fib1).length)) === n)
      return counter;
    
    temp = fib2 + fib1
    fib1 = fib2
    fib2 = temp;
    counter++;
  }

}

console.log(findFibonacciIndexByLength(2n) === 7n);  // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);  // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);  ;
console.log(findFibonacciIndexByLength(16n) === 74n);  ;
console.log(findFibonacciIndexByLength(100n) === 476n);  ;
console.log(findFibonacciIndexByLength(1000n) === 4782n);  ;
console.log(findFibonacciIndexByLength(10000n) === 47847n);  ;

