let instruments = ["piano", "guitar", "violin", "drums", "saxaphone", "flute"];

let ulRef = document.querySelector("ul");

for (let i = 0; i < instruments.length; i++){
    console.log("For Loop:", instruments[i]);
    ulRef.innerHTML += "<li>" + instruments[i] + "</li>"
};