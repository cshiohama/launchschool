// Return a new string that swaps the case of all of the letters:

let munstersDescription = "The Munsters are creepy and spooky.";
let result = '';

for (let i = 0 ; i < munstersDescription.length ; i++) {
  if (munstersDescription.charAt(i) === munstersDescription.charAt(i).toUpperCase()) {
    result += munstersDescription.charAt(i).toLowerCase();
  } else {
    result += munstersDescription.charAt(i).toUpperCase();
  }
}

console.log(result);