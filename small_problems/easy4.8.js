function swap(s) {
  let result = [];

  for (let w of s.split(' ')){
    if (w.length == 1) 
      result.push(w);
    else
      result.push(w[w.length - 1] + w.slice(1, w.length - 1) + w[0]);
  }
  
  return result.join(' ' );
} 

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"