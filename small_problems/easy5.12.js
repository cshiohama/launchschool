/*
Algorithm: 
- create afterMidnight function
  Break down string and convert into hour and minute numbers
  declare totalMinutes variable
  add (hours * 60) to totalMinutes
  add minutes to totalMinutes
  return totalMinutes % 1440

- create beforeMidnight function
  return 1440 - afterMidnight(time);
*/

function beforeMidnight(time) {
  return (1440 - afterMidnight(time)) % 1440;
}

function afterMidnight(time) {
  let totalMinutes = 0;
  let arr = time.split(':');
  let hours = Number(arr[0]);
  let minutes = Number(arr[1]);

  totalMinutes += hours * 60;
  totalMinutes += minutes;
  return totalMinutes % 1440;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);