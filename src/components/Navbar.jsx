import React from "react"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="/ansh-shetty.png" alt="ansh-shetty" className="nav-logo" />
      <div className="nav-links">
        <button className="nav-buttons">Home</button>
        <button className="nav-buttons">Professional</button>
        <button className="nav-buttons">Skills</button>
        <button className="nav-buttons">Projects</button>
        <button className="nav-buttons">Reach Out</button>
      </div>
    </div>
  )
}

export default Navbar
