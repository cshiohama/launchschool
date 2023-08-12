function centerOf(str) {
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 == 1) {
    return str.charAt(mid);
  } else {
    return str.slice(mid - 1, mid + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"