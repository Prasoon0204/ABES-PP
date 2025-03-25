import { useState } from 'react'
import './App.css'
const App = () => {
  // const [name, setName] = useState("MOHIT");
  const [isSubmit, setIsSubmit] = useState(true);
  const [user, setUser] = useState({})
  // const handleChange = (e) => {
  //   let val = ""
  //   val += e.target.value;
  //   setTimeout(()=>{
  //     setName(val.toUpperCase())
  //   },1000)
  // }

  const handleSubmit = (e) => {
    const obj = {
      name: e.get("name"),
      email: e.get("email"),
      pass: e.get("pass"),
    }
    setUser(obj);
    setIsSubmit(false);
  }
  
  return(
    <>
    {isSubmit ? 
        (<form action={handleSubmit}>
          <input name = "name" type="text" />
          <input name = "email" type="email" />
          <input name = "pass" type="password" />
          <button>Submit</button>
          <button>Reset</button>
        </form>):(
          <div className="container">
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h3>{user.pass}</h3>
          </div> 
        )
    }
    </>
  )
}
export default App;