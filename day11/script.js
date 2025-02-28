const getData = (text) => {
    const pr = fetch(`https://dummyjson.com/recipes/search?q=${text}`);
    pr.then((res) => {
        const pr2 = res.json();
        pr2.then((data) => {
            showCards(data.recipes);
        })
    })
}

const showCards = (dataArr) => {
    const root = document.getElementById('card-container');
    root.innerHTML = "";
    dataArr.forEach((e) => {
        const newDiv = document.createElement('div');
        newDiv.className = "card";
        newDiv.innerHTML = `
            <h4>${e.name}</h4>
            <img src="${e.image}">
            <p>${e.cuisine}</p>
        `
        root.appendChild(newDiv);
    });
} 

let id = null;

const handleSearch = (e) => {
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(() => {
        getData(e.target.value);
    },500);
}