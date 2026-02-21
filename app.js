"use strict";
console.log("Hello!")

const tags = ["js", "week3"];
const scores = [10, 25, 18, 30];

let totalScore = 0;

for(let i = 0; i < scores.length; i++){
    totalScore += scores[i];
}
console.log(totalScore);

tags.forEach((tag) => {
    console.log(tag);
});

const doubledScores = scores.map((score)=>{
    return score * 2
})
console.log(doubledScores);

console.log("build: finish mini-build");

