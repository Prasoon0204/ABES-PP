import { useState } from "react"
import Card from "./Card";
import Form from "./Form";

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("Raj");
  const [email, setEmail] = useState();

  const handleSubmit = () =>{

    setIsSubmitted(true);
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    isSubmitted ? <Card
    name = {name}
    email = {email}
     /> : 
    <Form 
    submit = {handleSubmit} 
    name = {name} 
    email = {email} 
    handleName = {handleName} 
    handleEmail = {handleEmail} />
  )
}

export default App