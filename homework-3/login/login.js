//another reason to why I use let is because you can add to the variable or reassign it
let password = "d0nteatTheScript";;

let withSpace = password.includes(" ");
let eightCharacters = password.length;
let hasEat = password.includes("eat");

console.warn("Password Requirements: Does not start with a space, at least 8 characters, does not include 'eat' ");
console.log("Password start with space?:", withSpace);
console.log("Password has at least 8 characters?:", eightCharacters >= 8);
console.log("Password contains the word eat", hasEat);

console.warn("Is password valid?", !withSpace && eightCharacters >= 8 && !hasEat);