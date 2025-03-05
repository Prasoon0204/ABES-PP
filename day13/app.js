import React, { use } from "react";
import ReactDOM from "react-dom/client";

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

const Card = ({userName}) => {
    return (
        <div>
            <h3>Hello {userName}!</h3>
            <p>Nice to meet you!</p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Card userName = "Likhilesh"></Card>
            <Card userName = "Ajay"></Card>
            <Card userName = "Raj" />
            {Card({userName : "Rohan"})}
        </div>
    )
}

reactRoot.render(<App />);