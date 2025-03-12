const menuRef = document.querySelector("#menu");
const cartRef = document.querySelector("#cart");
const noItemsRef = document.querySelector("#no-items");
const removeBtnRef = document.querySelector("#remove-item")

const menuItems = [
  { name: "Hamburger", price: "$2.99" },
  { name: "Cheeseburger", price: "$3.99" },
  { name: "Cheese Pizza", price: "$3.99" },
  { name: "Pepperoni Pizza", price: "$4.99" },
  { name: "Sausage Pizza", price: "$4.99" },
  { name: "Ceasar Salad", price: "$3.99" },
  { name: "Fries", price: "$1.99" },
  { name: "Onion Rings", price: "$2.49" },
];

// console.log(menuItems[menuItems.length - 9].name)


const cart = [];

function addItemToCart(e) {
  cart.push(e.target.dataset.name);

  showCart();
}
function removeItemFromCart() {
  cart.pop();

  showCart();
}
function showCart() {
  cartRef.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    cartRef.innerHTML += "<tr>" + cart[i] + "</tr>";
  
    
  }

  noItemsRef.style.display = cart.length === 0 ? "block" : "none";
}

//For loop to show menu and add item to cart
for (let i = 0; i < menuItems.length; i++) {
  const anItem = menuItems[i]
  const newLi = document.createElement("li")
  newLi.innerText = anItem.name + " | " + anItem.price;

  const newBtn = document.createElement("button");
  newBtn.innerText = "+";
  newBtn.dataset.name = anItem.name + " | " + anItem.price;
  
  newBtn.onclick = addItemToCart;
  newLi.appendChild(newBtn);
  

  menuRef.appendChild(newLi);
}
removeBtnRef.onclick = removeItemFromCart;
