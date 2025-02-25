// console.log("start");

// const handleInnerCall = () => {
//     console.log("step Y");
// }

// const handleCall = () => {
//     console.log("step M");

//     handleInnerCall();

//     console.log("step N");
// }

// document.querySelector("body").addEventListener("click",handleCall);
// console.log("end");

// -----------------------------------------------------------------------------

const res = fetch("https://dummyjson.com/users")
console.log(res);

res.then((a) => {
    console.log("a",a);
    const pr = a.json();

    pr.then((data) => {
        // console.log("data",data);
        showUI(data);
    })
}).catch((b) => {
    console.log("b",b);
})

function showUI(data){
    console.log("data : ",data);
    const {firstName, lastName, maidenName} = data.users[0];
    const card = document.getElementById('card');
    card.innerHTML = `
    <h4>${firstName.toUpperCase()}</h4>
    <h4>${maidenName.toUpperCase()}</h4>
    <h4>${lastName.toUpperCase()}</h4>
    `;
}