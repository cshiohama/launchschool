/* Write three different ways to remove all of the elements 
*  from the following array:
*/

let numbers1 = [1, 2, 3, 4];
numbers1.splice(0,4);
console.log(numbers1);

let numbers2 = [1, 2, 3, 4];
let len = numbers2.length;
for (let i = 0 ; i < len ; i++){
  numbers2.pop();
}
console.log(numbers2);

let numbers3 = [1, 2, 3, 4];
while (numbers3.length) {
  numbers3.pop();
}
console.log(numbers3);

let numbers4 = [1, 2, 3, 4];
numbers4.length = 0;  // wow!
console.log(numbers4);