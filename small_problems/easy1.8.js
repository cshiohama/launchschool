const isLeapYear = year => {
  if (year % 4 === 0) {
    if (year % 400 === 0)
      return true;
    if (year % 100 === 0)
      return false;
    return true;
  }
  return false;
}

let years = [
  2016, 2015, 2100 ,2400 ,240000, 240001, 2000, 1900, 1752, 1700, 1, 100, 400];

/* 
isLeapYear(2016),      // true
isLeapYear(2015),      // false
isLeapYear(2100),      // false
isLeapYear(2400),      // true
isLeapYear(240000),    // true
isLeapYear(240001),    // false
isLeapYear(2000),      // true
isLeapYear(1900),      // false
isLeapYear(1752),      // true
isLeapYear(1700),      // false
isLeapYear(1),         // false
isLeapYear(100),       // false
isLeapYear(400)       // true
*/ 

for (let year of years )
  console.log(`${year} ` + isLeapYear(year));