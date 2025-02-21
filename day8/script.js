const arr = [
    {id:'1',name:"Anuj",city:"Delhi"},
    {id:'2',name:"Rakesh",city:"Mumbai"},
    {id:'3',name:"Mohan",city:"Hyderabad"},
    {id:'4',name:"Ajay",city:"Noida"},
]

const showCards = (newData) => {
    root.innerHTML = "";
    newData.forEach((e) => {
        const card = document.createElement('div');
        card.className="card";
        card.innerHTML = `
        <h4>${e.name}</h4>
        <p>${e.city}</p>
        <button onClick="deleteCard(event,${e.id})">Delete</button>
        `;
        root.appendChild(card)
    });
}

const deleteCard = (e,i) =>{
    const idx = arr.findIndex((ele) => ele.id == i);
    arr.splice(idx,1);
    showCards(arr);
}

const handleCity = (e) =>{
    const selectedCity = e.target.value;
    const newData = arr.filter((ele) => {
        if(ele.city === selectedCity) return true;
        return false;
    });
    showCards(newData);
}

showCards(arr);
handleCity();