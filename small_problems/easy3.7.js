function twice(n) {
  let s = String(n);
  if (s.length % 2 == 1)
    return n * 2;
  
  let len = s.length / 2;
  let left = s.slice(0, len);
  let right = s.slice(len);
 
  if (left === right)
    return n;
  else
    return n * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676