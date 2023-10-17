class CustomSet {
  constructor(arr = []) {
    this.set = [];

    for (let n of arr)
      if (!this.set.includes(n))
        this.set.push(n);
  }
  
  isEmpty() {
    return this.set.length === 0;
  }
  
  contains(n) {
    return this.set.includes(n);
  }
  
  add(n) {
    if (!this.set.includes(n)) this.set.push(n);

    return this;
  }
  
  intersection(set2) {
    return new CustomSet(this.set.filter(n => set2.contains(n)));
  }
  
  difference(set2) {
    return new CustomSet(this.set.filter(n => !set2.contains(n)));
  }
  
  union(set2) {
    return new CustomSet(this.set.concat(set2.set));
  }
  
  isSubset(set2) {
    return this.set.every(n => set2.contains(n));
  }
  
  isDisjoint(set2) {
    return this.set.every(n => !set2.contains(n));
  }
  
  isSame(set2) {
    return this.isSubset(set2) && this.set.length === set2.set.length;
  }
}

module.exports = CustomSet;