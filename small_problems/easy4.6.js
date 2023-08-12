function wordSizes(s) {
  let result = {};
  for (let w of s.split(' ')){
    let count = w.length;
    if (!result[count])
      result[count] = 1;
    else
      result[count] += 1;
  }
  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}