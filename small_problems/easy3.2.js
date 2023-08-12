function logInBox(s) {
  let len = s.length;
  let borderTop = `+-${'-'.repeat(len)}-+`;
  let borderSide = `| ${' '.repeat(len)} |`;
  let borderMiddle = `| ${s} |`;
  
  console.log(borderTop);
  console.log(borderSide);
  console.log(borderMiddle);
  console.log(borderSide);
  console.log(borderTop);
}




logInBox('To boldly go where no one has gone before.');
logInBox('');