class Scrabble {
  constructor(word) {
    if (word === null)
      this.word = '';
    else
      this.word = word.toLowerCase();
    
    this.d = {};
    
    for (let c of 'aeioulnrst')
      this.d[c] = 1;
    
    for (let c of 'dg')
      this.d[c] = 2;
    
    for (let c of 'bcmp')
      this.d[c] = 3;
    
    for (let c of 'fhvwy')
      this.d[c] = 4;
    
    this.d['k'] = 5;
    
    for (let c of 'jx') 
      this.d[c] = 8;
    
    for (let c of 'qz')
      this.d[c] = 10;
  }
  
  score() {
    let result = 0;
    for (let c of this.word) {
      if (this.d[c])
        result += this.d[c];
    }
    
    return result;
  }
  
  static score(word) {
    let scrabble = new Scrabble(word);
    return scrabble.score();
  }
}

module.exports = Scrabble;