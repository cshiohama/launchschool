function makeCounterLogger(n) {
  return function(m) {
    if (n > m) {
      for (let i = n ; i >= m ; i--)
        console.log(i);
    } else {
      for (let i = n ; i <= m ; i++)
        console.log(i);
    }
  }
}

let countlog = makeCounterLogger(5);

countlog(8);
countlog(2);
