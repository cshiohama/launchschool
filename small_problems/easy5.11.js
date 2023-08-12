/*
Algorithm:
- if n is negative
    multiply by -1
    n %= 1440
    n -= 1440 - n
- else
-   n % 1440 to discard cycles longer than 24 hours

- hours = n / 60
- minutes = n % 60

- return hours and minutes as a string
*/ 
function padZeros(str) {
  return str.length === 1 ? '0' + str : str;
}

function timeOfDay(n) {
  if (n < 0) {
    n *= -1;
    n %= 1440
    n = 1440 - n
  } else {
    n %= 1440;
  }

  let hours = String(Math.floor(n / 60));
  let minutes = String(n % 60);
  
  hours = padZeros(hours);
  minutes = padZeros(minutes);

  return hours + ':' + minutes;
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");