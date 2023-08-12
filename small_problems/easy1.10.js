const multisum = n => {
  let result = 0;
  for (let i = 1 ; i <= n ; i++)
    if (i % 3 === 0 || i % 5 === 0)
      result += i;
  return result;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168