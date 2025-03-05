import React from "react";
import ReactDOM from "react-dom/client";
import Wallpaper, {TEXT} from "./components/Card";
import { Button } from "./components/Button"

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
    console.log(TEXT)
    return (
        <div>
            <Button>Submit</Button>
            <Wallpaper userName = "Likhilesh"></Wallpaper>
            <Wallpaper userName = "Ajay"></Wallpaper>
            <Wallpaper userName = "Raj" />
            {Wallpaper({userName : "Rohan"})}
        </div>
    )
}

reactRoot.render(<App />);