const arr = [
    {email:"anuj@abes.edu.in",name:"Anuj",city:"Delhi"},
    {email:"rakesh@abes.edu.in",name:"Rakesh",city:"Mumbai"},
    {email:"mohan@abes.edu.in",name:"Mohan",city:"Hyderabad"},
    {email:"ajay@abes.edu.in",name:"Ajay",city:"Noida"},
]

const root = document.getElementById('parent');

arr.forEach((e) => {
    const newCard = document.createElement('div');
    // newCard.addEventListener("click",()=>{
    //     newCard.style.backgroundColor=getRandomColor();
    // })
    newCard.addEventListener("click",()=>{
        newCard.style.display="none";
    })
    newCard.className="card";
    newCard.innerHTML = `
    <h4>${e.name}</h4>
    <h6>${e.email}</h6>
    <p class="text">${e.city}</p>
    `;
    root.appendChild(newCard)
    // newCard.addEventListener("click",()=>{
    //     newCard.style.display="hidden";
    // })
});

const getRandomColor = ()=>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}

const hangleBgChange = () => {
    // console.log("btn clicked!");
    // logic to change background color
    const bodyElem = document.querySelector('body');
    bodyElem.style.backgroundColor = getRandomColor();
}

newtext = document.querySelector(".text");

newtext.addEventListener("click",(event)=>{
    newtext.style.backgroundColor=getRandomColor();
})