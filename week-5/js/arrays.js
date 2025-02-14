console.log("arrays woo")
//Arrays
const zodiacSigns = [
    "Libra",
    "Cancer",
    "Leo",
    "Taurus",
    "Scorpio",
    "Aquarius",
    "Gemini",
    "Virgo",
    "Pisces",
    "Aries",
    "Sagittarius",
    "Capricorn",
];

console.log("zodiacSigns:", zodiacSigns);

console.table(zodiacSigns);

console.log("2nd Zodiac:", zodiacSigns[1]);

console.log("# of Zodiacs:", zodiacSigns.length);

const zodiacSignsUlRef = document.getElementById("zodiac-signs");
//commonly used
for (let i = 0; i < zodiacSigns.length; i++){
    console.log("For Loop:", zodiacSigns[i]);
    zodiacSignsUlRef.innerHTML += "<li>" + zodiacSigns[i] + "</li>"
}
//loops that end with curly brackets dont need to end with ;

//not so important, dont bother remember
let whileI = 0;
while(whileI < zodiacSigns.length){
    console.log("While Loop:", zodiacSigns[whileI]);
    whileI++
}

let whileDoI = 0;
do {
whileDoI++
} while (whileDoI < zodiacSigns.length);

const gradestatsSectionRef = document.querySelector("#grade-stats");
const grades = [21, 6, 79, 8, 86, 4, 2, 84, 57, 10];

let sumOfGrades = 0;
for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];
    sumOfGrades += grade;
} 

gradestatsSectionRef.innerHTML += "<h4>Avg:" + sumOfGrades / grades.length + "</h4>";

