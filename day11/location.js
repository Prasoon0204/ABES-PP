const getData = (text) => {
    const pr = fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`, {
        headers:{
            "x-rapidapi-host": "google-map-places.p.rapidapi.com",
            "x-rapidapi-key": "b9de2eed96msh7bd1f7e0cd45813p13d015jsnd16fa863e8ff",
        }
    })
    pr.then((res) => {
        const pr2 = res.json();
        pr2.then((data) => {
            showLocations(data);
        })
    })
}

const root = document.getElementById("locations");

const showLocations = (data) => {
    root.innerHTML = "";
    const { predictions } = data;
    predictions.forEach(e => {
        const p = document.createElement('p');
        p.innerText = e.description;
        root.appendChild(p);
    });
}

let id = null;

const handleSearch = (e) => {
    if(id) clearTimeout(id);
    id = setTimeout(()=>{
        getData(e.target.value);
    },500)
}