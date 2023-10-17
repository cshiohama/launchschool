class SumOfMultiples {
  constructor(...args) {
    this.args = args.length > 0 ? args : [3, 5];
  }
  
  to(limit) {
    let total = 0;
    
    for (let mult = 1 ; mult < limit ; mult++)
      if (this.args.some(n => mult % n === 0))
        total += mult;

    return total;
  }  
  
  static to(limit) {
    return new SumOfMultiples().to(limit);
  }
}

module.exports = SumOfMultiples;