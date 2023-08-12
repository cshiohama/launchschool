function sumSquareDifference(n) {
  let squareSum = 0;
  let sumSquares = 0;

  for (let i = 1 ; i <= n ; i++)
    squareSum += i;

  squareSum = squareSum ** 2;

  for (let i = 1 ; i <= n ; i++)
    sumSquares += i ** 2;
  
  return squareSum - sumSquares;
}


console.log(sumSquareDifference(3));  // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));  // 2640
console.log(sumSquareDifference(1));  // 0
console.log(sumSquareDifference(100));  // 25164150