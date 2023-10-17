class Diamond {
  static makeDiamond(c) {
    function spread(c) {
      if (c === 'A') return c;
      return c + ' '.repeat((2 * arr.indexOf(c)) - 3) + c;
    }
    
    function makeLine() {
      let middle = spread(arr[index]);
      let padding = ' '.repeat((width - middle.length) / 2);
      return padding + middle + padding + '\n';
    }
    
    if (c === 'A') return 'A\n';
    
    let arr = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');    
    let width = (2 * arr.indexOf(c)) - 1;
    let result = '';
    let index = 1;

    for ( ; index <= arr.indexOf(c) ; index++) { // increase
      result += makeLine();
    }
    
    for (index -= 2 ; index > 0 ; index--) { // decrease
      result += makeLine();
    }
    
    return result;
  }
}

module.exports = Diamond;