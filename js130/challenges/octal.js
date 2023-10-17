class Octal {
  constructor(n) {
    this.n = String(n).split('');
  }
  
  toDecimal() {
    let result = 0;
    let placeValue = 1;
    
    for (let i = this.n.length - 1 ; i >= 0 ; i--)  {
      if (!'01234567'.includes(this.n[i])) return 0;
      
      result += placeValue * Number(this.n[i]);
      placeValue *= 8;
    }
    
    return result;
  }
}

module.exports = Octal;