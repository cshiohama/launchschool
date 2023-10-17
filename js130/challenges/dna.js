class DNA {
  constructor(dna) {
    this.dna = dna;
  }
  
  hammingDistance(str) {
    let result = 0;
    let length = Math.min(this.dna.length, str.length);

    for (let i = 0 ; i < length ; i++) {
      if (this.dna[i] !== str[i])
        result++;
    }
    
    return result;
  }
}

module.exports = DNA;