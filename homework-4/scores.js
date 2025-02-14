let scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];

let ulRef = document.querySelector("ul");

const idRef = document.querySelector("#scenario");



for (let i = 0; i < scores.length; i++){
    console.log("For Loop:", scores[i]);
    ulRef.innerHTML += "<li>" + scores[i] + "</li>"
};

let sumOfscores = 0;
for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    sumOfscores += score;
} 

idRef.innerHTML = "<h4>Avg:" + sumOfscores / scores.length + "</h4>";




