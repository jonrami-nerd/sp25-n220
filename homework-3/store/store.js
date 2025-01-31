//Another reason to why I use let is cause when declaring what x equals, i typically do "Let x = ?"
let price = 40.99;
let tax = 0.07;
let discount = 0.10;

let totalAfterTax = price * (1 + tax);
let discountAfterTax = price * (1 + tax) * (1 - discount);

console.log("Total price after tax: $", totalAfterTax.toFixed(2));
console.log("Qualifies for discount?", totalAfterTax >= 50);
console.log("Discounted total after tax: $", discountAfterTax.toFixed(2));