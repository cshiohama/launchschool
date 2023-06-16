function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}


function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}


console.log(isDotSeparatedIpAddress('127.0.0.1'));
console.log(isDotSeparatedIpAddress('127'));
console.log(isDotSeparatedIpAddress('999.0.0.1'));
console.log(isDotSeparatedIpAddress('127.0.0.abcd'));