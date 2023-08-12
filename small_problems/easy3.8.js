function getGrade(n1, n2, n3) {
  let average = (n1 + n2 + n3) / 3;
  
  if (average < 60) 
    return 'F';
  if (average < 70) 
    return 'D';
  if (average < 80) 
    return 'C';
  if (average < 90) 
    return 'B';
  else
    return 'A';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"