import Papa from "papaparse"
import { useState } from "react";
import Card from "./Card";
const App = () => {
  const [profiles, setProfiles] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file,{
      header: true,
      complete: handleData,
    })
  }

  const handleData = (res) => {
    const {data, errors} = res;
    if(errors.length > 0) alert("Error!")
    else setProfiles(data);
  }

  console.log(profiles)
  return (
    <div>
      <div>
        <input type="file" accept=".csv" onChange={handleFileUpload} />
      </div>
      <div>
        {profiles.map((e) => (
          <Card
            name = {e.name}
            email = {e.email}
            githubLink = {e.githubLink} 
          />
        ))}
      </div>
    </div>
  )
}

export default App