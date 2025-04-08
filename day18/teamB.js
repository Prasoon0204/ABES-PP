// let cnt = 0;
console.log("Team B Loading...")
const sum = (...rest) => {
    // cnt++;
    // console.log(cnt)
    return rest.reduce((acc,val) => acc+val,0);
}

module.exports = sum;

console.log("Team B done ✅")