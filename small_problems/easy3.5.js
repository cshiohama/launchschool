function triangle(n) {
  for (let i = 1, fill = n - i  ; i <= n ; i++, fill--) 
    console.log(' '.repeat(fill) + '*'.repeat(i));
}

triangle(5);
triangle(9);