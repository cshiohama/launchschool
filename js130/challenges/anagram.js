class Anagram{
  constructor(anagram) {
    this.anagram = anagram;
    this.sorted = anagram.toLowerCase().split('').sort().join('');
  }
  
  match(arr) {
    function notDuplicate(word) {
      for (let w of result) {
        if (w.toLowerCase() === word.toLowerCase())
          return false;
      }
      return true;
    }
    
    let result = [this.anagram];
    arr.forEach(word => {
      if (word.toLowerCase().split('').sort().join('') === this.sorted)
        if (notDuplicate(word))
          result.push(word);
    });
    
    result.shift();
    return result;
  }
}

module.exports = Anagram;