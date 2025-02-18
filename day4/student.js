const userName = prompt("Enter your Name : ");
const n = parseInt(prompt("Enter number of subjects : "));

let sum = 0, hiScore = -1;
let subjects = {};

for(let i = 0; i < n; i++){
    const subName = prompt("Enter name of subject : ")
    const mark = parseInt(prompt("Enter marks of subject out of 100 : "))

    sum += mark;

    if(mark > hiScore){
        hiScore = mark;
        hiSub = subName;
    }

    subjects[subName] = mark;
}

console.log(`Final Percenatge = ${sum/Object.keys(subjects).length}`)
console.log(`Name Of Heighest Scoring Subject = ${hiSub}`)