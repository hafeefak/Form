import React from 'react'
import {Link} from "react-router-dom"
import "./Nav.css"

function Home() {
  return (
    <>
    <h2 className="home">Home page</h2>
    <nav className="navbar">
        
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
    </nav>

    </>
  )
}

export default Home
