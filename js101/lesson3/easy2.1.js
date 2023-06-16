// Given a string, return a new string that replaces every occurrence 
// of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

while (advice.includes('important')) {
  advice = advice.replace('important', 'urgent');
}

console.log(advice);