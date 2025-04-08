console.log("manager loading...");

const obj = require("./teamA.js");
const sum = require("./teamB.js");

console.log(`
    Our current
        Revenue is ${obj.REVENUE}$ 
        with ${obj.PROFIT}$ profit;
`);

const REVENUE = sum(100,100);

console.log(REVENUE)

console.log("manager done ✅")