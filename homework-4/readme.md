## Assignment 4

### GithubLive Link

[Homework 4](https://jonrami-nerd.github.io/sp25-n220/homework-4/)

---

### Weekly Recap

- javascript used camel case (first word is lowercase, afterwords it uppercase)
- example: `` raccoonEatingPeanutButter ``

---

**Selecting and Referencing Elements in the DOM**

`` document.getElementById(id) `` - Selects an element based on its unique id

`` document.getElementsByClassName(className) `` - Returns a collection (HTMLCollection) of elements with the specified class name.

`` document.querySelector(selector) `` - Selects the first matching element based on a CSS selector

`` document.querySelectorAll(selector) `` - Selects all matching elements and returns a NodeList, allowing iteration with `` forEach ``

---

**Manipulating Content of Elements**

``textContent`` – Sets or retrieves only the text inside an element, ignoring HTML tags

``innerText``  - similar to ``textContent`` but respects CSS styling (ex. hidden text is not retrieved).

``innerHTML`` - sets or gets the html things inside an element

---

**Changing Style Attributes of an Element**

``backgroundColor`` - changes the background color

``color`` - changes text color

``fontSize`` - changes font size

``display`` - controls the visibility of an element

**Creating new elements**

1. Creating a new element

- ``let newDiv = document.createElement("div"); newDivinnerHTML = "This is a new div!";
newDiv.style.backgroundColor = "yellow";``

2. Appending the new element to an existing one

- ``document.body.appendChild(newDiv);``

---

**How to Create Arrays in JavaScript**

1. Using Square Brackets (Recommended Method)

- ``let fruits = ["apple", "banana", "cherry"];
let numbers = [1, 2, 3, 4, 5];
let flags = [true, false, true];``

2. Using the ``Array`` Constructor

- ``let colors = new Array("red", "blue", "green");
let scores = new Array(10, 20, 30);``

---

**Looping Through Arrays**

1. Using a Traditional ``for`` Loop

- A ``for`` loop is useful when iterating over an array using its index.

``let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); // Outputs each number in the array
}``

2. Using a ``while`` loop

- A ``while`` loop is helpful when we want to iterate over an array as long as a certain condition is true.

``let fruits = ["apple", "banana", "cherry"];
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]); // Outputs each fruit name
  i++;
}``

3. Using a ``do...while`` Loop

- A ``do...while`` loop ensures that the loop runs at least once, even if the condition is false initially.


