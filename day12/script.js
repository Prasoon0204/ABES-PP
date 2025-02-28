// const root = document.getElementById("root");
// const ul = document.createElement('ul');
// const h1 = document.createElement('h1');
// h1.innerText = "Items";
// root.appendChild(h1)
// root.appendChild(ul);
// for(let i = 0; i < 3; i++){
//     const li = document.createElement('li');
//     li.innerText = "item"+(i+1);
//     ul.appendChild(li);
// }

// ---------------------------------------------------------------------

// const domRoot = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(domRoot);

// const li1 = React.createElement("li",{
//     style:{
//         color:"blue",
//     }
// }, "Item 1");
// const li2 = React.createElement("li",{
//     className: "text-big",
// }, "Item 2");
// const li3 = React.createElement("li",{}, "Item 3");

// const ul = React.createElement("ul",{},[li1,li2,li3])

// reactRoot.render(ul)

// ---------------------------------------------------------------------

// const domRoot = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(domRoot);

// const title = React.createElement("h1",{},"Hello from React DOM!")

// const title2 = {
//     $$typeof: Symbol.for("react.element"),
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "style": {"color": "brown"},
//         "children": "Hello from React DOM!"
//     },
//     "_owner": null,
//     "_store": {}
// }

// console.log("type of title:", typeof title);
// console.log("title:", title);

// reactRoot.render(title2);

// ---------------------------------------------------------------------

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

// const title2 = <h1>Hello from JSX</h1>;

const title3 = () => {
    return <h1>Hello from JSX Again </h1>
}

reactRoot.render(title3());