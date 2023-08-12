function cleanUp(s) {
  let valid = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  
  for (let i = 0 ; i < s.length ; i++) {
    if (valid.indexOf(s[i]) === -1){
      if (result[result.length - 1] !== ' ')
      result += ' ';
    }
    else
      result += s[i];
  }
  return result;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "