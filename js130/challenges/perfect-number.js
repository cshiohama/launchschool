class PerfectNumber {
  static classify(n) {
    let total = 0;
    if (n <= 0) throw new Error();
    
    for (let i = 1 ; i < n ; i++)
      if (n % i === 0)
        total += i;
    
    if (total < n)
      return 'deficient';
    else if (total === n)
      return 'perfect';
    else
      return 'abundant';
  }
}

module.exports = PerfectNumber;