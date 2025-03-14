import React from 'react'
import {useNavigate} from "react-router-dom"
import "./Login.css"

function Login() {
    
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/")
    }
  return (
    <div className="form">
    <form onSubmit={handleSubmit} className="formcontainer">
      <input type="text" placeholder="enter username " required></input>
      <input type="text" placeholder ="enter password" required></input>
      <button>Submit</button>
     </form>
     </div>
  )
}

export default Login
