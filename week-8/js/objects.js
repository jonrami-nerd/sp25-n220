//References to DOM
const detailsSectionRef = document.querySelector("#details");

// Data
const pokemon = {
  name: "Ponyta",
  type: "Fire",
  weaknesses: ["Water", "Ground", "Rock"],
};

const myParty = [
  { name: "Ponyta", type: "Fire" },
  { name: "Chimcar", type: "Fire" },
  { name: "Meowth", type: "Normal" },
  { name: "Houndoom", type: "Dark|Fire" },
];

console.log("My Starter Pokemon", pokemon);
console.log("My Pokemon type:", pokemon.type);

console.log("First Pokemon in party:", myParty[0]);
console.log("Last Pokemon's name:", myParty[myParty.length - 1].name);

for (let i = 0; i < myParty.length; i++) {
  const currentPokemon = myParty[i];
  detailsSectionRef.innerHTML += "<div>";
  detailsSectionRef.innerHTML += "<h4>" + currentPokemon.name + "</h4>";
  detailsSectionRef.innerHTML += "<p>Type(s): " + currentPokemon.type + "</p>";
  detailsSectionRef.innerHTML += "</div>";
}
