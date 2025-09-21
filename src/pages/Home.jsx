import { FaPlay, FaInfoCircle } from "react-icons/fa";
import Carousel from '../components/Carousel';  
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="main-page">
      <div className="hero-section">
        <div className="left-gradient"></div>
        <div className="gif-div">
          <img className="hero-gif" src="/jake-gif.gif" alt="jake-peralta" />
        </div>
        <div className="hero-text">
          <h1 id="name">Ansh Shetty</h1>
          <h3>Trending <span>#1</span> in Developers</h3>
          <h2>
           I’m a Final Year Computer Engineering student and an aspiring full-stack developer who enjoys developing fast, user-friendly products. From an on demand Spotify Wrapped to a virtual speech-to-speech therapist, I love building stuff. I predominantly work with the MEAN and MERN stack. Outside tech, I play Basketball and Tug of War for my college. I bring curiosity, teamwork, and a drive to keep improving.
          </h2>
          <h4>Computer Science Student | Full Stack Developer</h4>
          <div className="buttons-homepage">
            <button><FaPlay /> Resume</button>
            <button id="second-button">
              <a href="https://www.github.com/shetty-ansh" target="_blank" rel="noopener noreferrer">
                <FaInfoCircle /> Github
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="trending">
        <h1>Trending Now</h1>
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
