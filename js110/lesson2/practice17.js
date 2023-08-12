function rHex(n) {
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let result = '';
  
  for (let i = 0 ; i < n ; i++)
    result += arr[Math.floor(Math.random() * 16)];
  
  return result;
}

function uuid() {
  return `${rHex(8)}-${rHex(4)}-${rHex(4)}-${rHex(4)}-${rHex(12)}`;
}

console.log(uuid());
console.log(uuid());
console.log(uuid());
console.log(uuid());


  
  