import React from 'react'
import { useNavigate } from 'react-router-dom'

function Registration() {
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/login")
    }
  return (
    <div className="form">
    <form className="formcontainer">
      <input type="text" placeholder="enter username " required></input>
      <input type="text" placeholder ="enter password" required></input>
      <button onClick={handleSubmit}>Submit</button>
     </form>
     </div>
  )
}

export default Registration
