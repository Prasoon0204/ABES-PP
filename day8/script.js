const arr = [
    {email:"anuj@abes.edu.in",name:"Anuj",city:"Delhi"},
    {email:"rakesh@abes.edu.in",name:"Rakesh",city:"Mumbai"},
    {email:"mohan@abes.edu.in",name:"Mohan",city:"Hyderabad"},
    {email:"ajay@abes.edu.in",name:"Ajay",city:"Noida"},
]

const showCards = (newData) => {
    root.innerHTML = "";
    newData.forEach((e) => {
        const card = document.createElement('div');
        card.className="card";
        card.innerHTML = `
        <h4>${e.name}</h4>
        <p>${e.city}</p>
        <button onClick="deleteCard(event,${e.email})">Delete</button>
        `;
        root.appendChild(card)
    });
}

const deleteCard = (e,email) =>{
    const idx = arr.findIndex((ele) => ele.email == email);
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
// handleCity();

const handleFormSubmit = (e) => {
    e.preventDefault();

    const isEmailExists = arr.some((ele)=>{
        return ele.email === e.target.email.value;
    })

    if(isEmailExists){
        alert("Email already exists");
        return;
    } else{
        const d = document.querySelector('select');
        const city = e.target.city.value;
        d.innerHTML += `
         <option value="${city}">${city}</option>
        `
    }

    const newElem = {
        name: e.target.fullName.value,
        email: e.target.email.value,
        city: e.target.city.value,
    };

    arr.push(newElem);
    showCards(arr);
}