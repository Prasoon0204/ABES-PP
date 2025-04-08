console.log("Team A loading...")
const add =  require("./teamB.js");

const PROFIT = 100
const EXPENSES = 20;

const REVENUE = add(PROFIT,EXPENSES);

module.exports = {
    PROFIT,
    EXPENSES,
    REVENUE,
};

console.log("Team A done ✅")