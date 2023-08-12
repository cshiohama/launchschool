function reverseWords(str) {
  return str
    .split(' ')
    .map(w => {
      if (w.length >= 5) {
        return w.split('').reverse().join('');
      }
      
      return w;
      
    })
    .join(' ');
}

console.log(reverseWords('Professional'));  // "lanoisseforP"
console.log(reverseWords('Walk around the block'));  // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));  // "hcnuaL loohcS"