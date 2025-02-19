// console.dir(window); --> window object represents : B.O.M
// console.dir(document);
// document.write("Hello");

// ---------------------------------------------------------------------

// finding/searching the element
// 1. document.getElementById("id-name") --> null/ element
// 1. document.getElementsByClassName("class-name") --> null/ element
// 1. document.getElementsByTagName() --> iterable [] / [element, element, ...]
// 1. document.querySelector()() --> 
// 1. document.querySelectorAll()() --> 

// const ele = document.getElementById("text-1");
// console.log(ele);
// ele.style.color = "blue"

// const ele = document.getElementsByClassName('cls');
// console.log(ele);

// ---------------------------------------------------------------------

// const ele = document.getElementsByTagName('p');
// console.log(ele);

// const ele = document.getElementsByTagName('h1')[0];
// console.log(ele)
// ele.style.color = "red";

// const ele = document.getElementsByTagName('div');
// console.log(ele)
// ele[0].style.backgroundColor = "blue";
// for(let i = 1; i < ele.length; i++) ele[i].style.backgroundColor = "yellow"

// const ele = document.querySelector('div');
// ele.style.backgroundColor = "blue"
// Array.from(ele.children).forEach((e)=>{
//     e.style.backgroundColor = "yellow"
// })

// ---------------------------------------------------------------------

const mapping = {
    Invitation: "You are invited for event",
    Reminder: "You are reminder for task",
    Notice: "You have a notice from college",
    Message:"You have 7 Messages",
}

// const data = document.querySelector('div');

// Array.from(data.children).forEach((e)=>{
//     e.children[1].innerText = mapping[e.children[0].innerText]
// })

const newElement = document.createElement('div');

const rootElement = document.querySelector('body');

rootElement.appendChild(newElement);

Object.entries(mapping).forEach((e)=>{
    const newChildDiv = document.createElement("div");
    newChildDiv.style.border = "1px solid lime"
    newChildDiv.innerHTML = `
        <h4 style = "color: orange">${e[0]}</h4>
        <p>${e[1]}</p>
    `
    newElement.appendChild(newChildDiv);
})

// ---------------------------------------------------------------------