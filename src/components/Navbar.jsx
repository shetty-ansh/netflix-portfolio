import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="/ansh-shetty.png" alt="ansh-shetty" className="nav-logo" />
      <div className="nav-links">
        <Link to="/"><button className="nav-buttons">Home</button></Link>
        <Link to="/experience"><button className="nav-buttons">Experience</button></Link>
        <Link to="/skills"><button className="nav-buttons">Skills</button></Link>
        <Link to="/projects"><button className="nav-buttons">Projects</button></Link>
        <Link to="/reachout"><button className="nav-buttons">Reach Out</button></Link>
      </div>
    </div>
  )
}

export default Navbar
