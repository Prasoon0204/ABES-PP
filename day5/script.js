// -----------------------------------

// const sum = (a,b) => {
//     const ans = a+b;
//     return ans;
// }

// const printPretty = (txt) => {
//     console.log("-------");
//     console.log(txt);
//     console.log("-------");
// }

// const res = sum(20,30);
// printPretty(res);

// -----------------------------------

// -----------------------------------

// callbacks and H.O.F
// const sum = (a,b,c) => {
//     // higher order function
//     const ans = a+b;
//     c(ans);
// }

// const printPretty = (txt) => {
//     console.log("-------");
//     console.log(txt);
//     console.log("-------");
// }

// const res = sum(20,30,printPretty);
// printPretty Callback function

// -----------------------------------

// const getMetaData = () => {
//     const name = prompt("Please Enter Your name");
//     console.log("Hello",name);
//     const numOfSubText = prompt("Please enter the number of subjects");
//     const numOfSub = parseInt(numOfSubText); // parseFloat(), Number()
//     return numOfSub;
// }

// const getSubjects = (num) => {
//     const record = {}
//     for(let i = 0; i < num; i++){
//         const subName = prompt(`Please enter the name of subject ${i+1}`);
//         const marks = Number(prompt(`Please enter the marks for ${subName}`));
//         record[subName] = marks;
//     }
//     return record;
// }

// const getPercenatge = (record) => {
//     const marks = Object.values(record)
//     let totalMarks = 0;
//     marks.forEach(e =>{
//         totalMarks += e;
//     })
//     return totalMarks/marks.length
// }

// const getHighestScoringSubject = (record) => {
//     const marks = Object.entries(record)
//     let sub;
//     let maxm = -1;
//     marks.forEach((e)=>{
//         if(e[1] > maxm){
//             maxm = e[1];
//             sub = e[0];
//         }
//     })
//     return sub;
// }

// const getGrades = (percentage) => {
//     const grades = [
//         [60, "B"],
//         [70, "B+"],
//         [80, "A"],
//         [90, "A+"],
//     ]
//     let grade = "F";
//     grades.forEach(g=>{
//         if(percentage >= g[0]){
//             grade = g[1];
//         }
//     })
//     return grade;
// }

// const num = getMetaData();
// const record = getSubjects(num);
// getHighestScoringSubject(record)
// const percentage = getPercenatge(record);
// console.log(percentage)
// console.log(getGrades(percentage))

// -----------------------------------

// const arr = [10,20,30]

// const newArray = [];
// arr.forEach((a)=>{
//     newArray.push(2*a)
// })
// console.log(newArray)

// -----------------------------------

// const arr = [10,20,30]

// const newArray = arr.map((a)=> 2*a)

// console.log(newArray)

// -----------------------------------

// const arr = [10,20,30];

// arr.reduce((acc,e,i,c) => {
//     console.log(acc,e,i,c)
//     return acc;
// })

// -----------------------------------

// const arr = [10,20,30];

// const ans = arr.reduce((acc,ele) => {
//     return acc*ele;
// })

// console.log(ans)

// -----------------------------------

// const arr = [10,20,30];

// const ans = arr.reduce((acc,ele) => {
//     return acc*ele;
// })

// console.log(ans)

// -----------------------------------

// const arr = [10,20,30];

// const newArr = arr.reduce((acc,ele)=>{
//     acc.push(ele*2);
//     return acc;
// },[]);

// console.log(newArr)

// -----------------------------------