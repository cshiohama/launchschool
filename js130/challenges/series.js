class Series {
  constructor(series) {
    this.arr = series.split('').map(n => Number(n));
  }
  
  slices(n) {
    if (n > this.arr.length) throw new Error();
    
    let result = [];

    for (let i = 0, j = n ; j <= this.arr.length ; i++, j++) {
      let sub = [];
      this.arr.slice(i,j).forEach(n => sub.push(n));
      result.push(sub);
    }
    
    return result;
  }
}

module.exports = Series;