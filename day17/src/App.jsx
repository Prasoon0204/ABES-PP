import { useState } from "react"
import Card from "./Card";
import Form from "./Form";

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userDetails, setUserDetails] = useState({})

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
        name : e.target.userName.value, 
        email : e.target.userEmail.value,
    }
    setUserDetails(data);
    setIsSubmitted(true);
  }

  return (
    isSubmitted ? <Card
    name = {userDetails.name}
    email = {userDetails.email}
     /> : 
    <Form 
    submit = {handleSubmit} 
    />
  )
}

export default App