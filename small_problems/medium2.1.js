/*
Algorithm:
- Create counters for lower, upper, neither, set all to 0
- Iterate string, adjust counts
- Return counts
*/

function letterPercentages(str) {
  let result = {lowercase: 0, uppercase: 0, neither: 0};
  
  for (let c of str) {
    if ('abcdefghijklmnopqrstuvwxyz'.includes(c))
      result.lowercase++;
    else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(c))
      result.uppercase++;
    else
      result.neither++;
  }
  
  for (let key of Object.keys(result)) {
    result[key] = ((result[key] / str.length) * 100).toFixed(2);
  }
  
  return result;
}



console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }