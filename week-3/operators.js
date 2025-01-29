const applePrice = 0.49;

let pickedApples = 4;

// i want more apples
pickedApples += 10;         

// i drop apples :(
pickedApples -= 4;

const totalForApples = applePrice * pickedApples;

console.log("Cost of Apples,", totalForApples);

//i have too many apples
pickedApples -= 6;

console.log("Too many apples,", pickedApples > 5);

let rememberRouteHome = false;

console.log("Good to go home,", pickedApples > 5 && rememberRouteHome);

let haveAMap = true;

console.log("now is it good to go home?", rememberRouteHome || haveAMap || Boolean(" "));

console.log("Total for apples a number?", typeof totalForApples);

console.log("String of 5:", typeof String(5), typeof 5);

let myAddress = "420";

myAddress += " Peach" + " St";

//myAddress = myAddress + " Peach";

console.log("My Address:", myAddress);

console.log("Street name has st:", myAddress.toLowerCase().includes("st"));

console.log("My Address", myAddress.replace("St", "Street"));

console.log("Jonathan".length)

let myAge = "69";

myAge = Number(myAge);

console.log("My Age:", myAge.toFixed(2));

myAge += 5/12;

console.log("My Age", myAge.toFixed(2));

console.log("Next Birthday:", Math.ceil(myAge));

console.log("My favorite number:",Math.round(Math.random() * 100));