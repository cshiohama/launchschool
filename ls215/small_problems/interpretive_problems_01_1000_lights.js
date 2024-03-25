/*
You have a bank of switches before you, numbered from 1 to n. Every switch is 
connected to exactly one light that is initially off. You walk down the row of 
switches and toggle every one of them. You walk back to the beginning of the 
row and start another pass. On this second pass, you toggle switches 2, 4, 6, 
and so on. On the third pass, you go back to the beginning again, this time 
toggling switches 3, 6, 9, and so on. You continue to repeat this process until 
you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns
an array of the lights that are on after n repetitions.

PROBLEM
- input: n - integer representing number of switches
- output: array containing lights that are on after n repetitions

RULES
- number of switches/lights is n
- lights are all initially off
- start at first light and make one pass, toggling each one (1, 2, 3...)
- go back to beginning and toggle every other, starting at 2 (2, 4, 6...)
- go back to beginning and toggle every third, starting at 3 (3, 6, 9...)
- continue until you have gone through n repetitions
- return array containing lights that are on

EXAMPLES/TEST CASES
*/

/*
DATA STRUCTURES
- array to hold switches
- array to return results

ALGORITHM
- array will be n + 1 in size and 0 index will be deleted after loop
- create array and populate with n + 1 elements, all initialized to false
- create counter variable and set to 1
- loop while counter <= n
    - for (let i = 0 + counter; i < n; i += counter )
      - toggle switch (arr[i] = !arr[i])
    - increment counter

- map true values in array to their index
- filter !false elements and return array 
  (idx 0 will always be true and automatically removed)

CODE
*/

function lightsOn(n) {
  let arr = [];
  let counter = 1;

  while (counter <= n) {
    for (let i = 0 + counter; i <= n; i += counter) {
      arr[i] = !arr[i];
    }
    counter++;
  }

  return arr.map((ele, idx) => ele ? idx : 0).filter(ele => ele !== 0);
}

console.log(lightsOn(0));        // [0]
console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

console.log(new Array(10))