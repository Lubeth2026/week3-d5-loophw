"use strict";
console.log("Hello!")

const tags = ["js", "week3"];
const scores = [10, 25, 18, 30];

let totalScore = 0;

for(let i = 0; i < scores.length; i++){
    totalScore += scores[i];
}
console.log(totalScore);