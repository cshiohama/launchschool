function fibonacci(n) {
  let fib1 = 1;
  let fib2 = 1;
  let temp;
  let counter = 1;
  
  while (counter < n) {
    temp = fib1 + fib2
    fib1 = fib2;
    fib2 = temp;
    counter++;
  }
  
  return fib1;
}

console.log(fibonacci(20));  // 6765
console.log(fibonacci(50));  // 12586269025
console.log(fibonacci(75));  // 2111485077978050