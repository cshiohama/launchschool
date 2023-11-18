class Anagram{
  constructor(word) {
    this.word = word;
    this.sorted = word.toLowerCase().split('').sort().join('');
  }
  
  match(arr) {
    function notDuplicate(word) {
      for (let w of result) {
        if (w.toLowerCase() === word.toLowerCase())
          return false;
      }
      return true;
    }
    
    let result = [this.word];
    let sorted;
    
    arr.forEach(word => {
      sorted = word.toLowerCase().split('').sort().join('');
      if (this.sorted === sorted && notDuplicate(word))
        result.push(word);
    });
    
    result.shift();
    return result;
  }
}

module.exports = Anagram;