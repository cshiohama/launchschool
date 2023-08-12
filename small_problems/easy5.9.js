/*
Algorithm: 
- Create result object
- Iterate through arr
  - If result[element] exists:
      result[element] ++;
  - else
      result[elment] = 1;
  
  iterate through result and display counts
*/

function countOccurrences(arr) {
  let result = {};
  
  for (let vehicle of vehicles) {
    if (result[vehicle]) {
      result[vehicle]++;
    } else {
      result[vehicle] = 1;
    }
  }
  
  for (let prop in result) {
    console.log(`${prop} => ${result[prop]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2