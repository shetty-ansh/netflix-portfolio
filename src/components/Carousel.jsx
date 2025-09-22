import { Link } from "react-router-dom"
import "./Carousel.css"

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div id="projects" className="trending-options">
        <Link to="/projects">
          <img className="cover-image" src="/projects-cover.png" alt="My Projects" />
          <div className="hover-text">View My Projects</div>
        </Link>
      </div>

      <div id="skills" className="trending-options">
        <Link to="/skills">
          <img className="cover-image" src="/skills-cover.png" alt="My Skills" />
          <div className="hover-text">Explore My Skills</div>
        </Link>
      </div>

      <div id="experience" className="trending-options">
        <Link to="/experience">
          <img className="cover-image" src="/experience-cover.png" alt="My Work Experience" />
          <div className="hover-text">See My Experience</div>
        </Link>
      </div>

      <div id="contact" className="trending-options">
        <Link to="/reachout">
          <img className="cover-image" src="/contact-cover.png" alt="My Contact Information" />
          <div className="hover-text">Get In Touch</div>
        </Link>
      </div>
    </div>
  )
}

export default Carousel


// On hovering over a card the bottom hald houldshow some text