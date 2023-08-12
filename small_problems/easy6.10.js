function isBalanced(str) {
  let stack = [];
  
  for (let c of str) {
    if (c === '(') {
      stack.push(c);
    } else if (c === ')') {
      if (stack[stack.length - 1] !== '(') {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  
  return stack.length === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);