import './App.css'
import Navbar from './components/Navbar'
import Project from './components/Project'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { FaPlay, FaInfoCircle } from "react-icons/fa";


function App() {
  return (
    <>
      <div className='main-page'>
        <div id='navbar'> <Navbar></Navbar> </div>
        <div className='hero-section'>
          <div className='left-gradient'></div>
          <div className='gif-div'>
            <img className='hero-gif' src="/jake-gif.gif" alt="jake-peralta" />
          </div>
          <div className='hero-text'>
            <h1>Ansh Shetty</h1>
            <h3>Trending <span>#1</span> in Developers</h3>
            <h2>
              I’m a Computer Engineering student and full-stack developer passionate about
              building products that are fast, scalable, and user-focused. From creating a
              Spotify stats dashboard with OAuth-secured logins to developing a MERN job
              portal handling 500+ listings, I love solving problems with clean code and smart
              design. My projects span Angular, React, Node, and MongoDB, and I’ve also
              explored ML with spaCy and XGBoost. Beyond tech, I’ve led city-wide recruitment
              drives with AIESEC, played Tug of War and Basketball at college level, and even
              guided hackathon teams to finals. Whether coding or leading, I bring curiosity,
              teamwork, and a drive to make things better.
            </h2>
            <div className='buttons-homepage'>
              <button><FaPlay /> Resume</button>
              <button id='second-button'><FaInfoCircle /> Github</button>
            </div>

          </div>
        </div>

        <div className='trending'>
          <h1>Trending Now</h1>
          <Project />
          <br />
          .
          <br />
          <br />
          .
          <br />
          <br />
          .
          <br />
        </div>
      </div>
    </>
  )
}

export default App
