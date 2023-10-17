class Triangle {
  constructor(...args) {
    let s = args.sort((a, b) => a - b);
    
    if (s.some(n => n <= 0))
      throw new Error();
      
    if ((s[0] + s[1]) <= s[2])
      throw new Error();
    
    if (s[0] === s[2])
      this.type = 'equilateral';
    else if (s[0] === s[1] || s[1] === s[2])
      this.type = 'isosceles';
    else
      this.type = 'scalene';
  }
  
  kind() {
      return this.type;
  }
}

module.exports = Triangle;

