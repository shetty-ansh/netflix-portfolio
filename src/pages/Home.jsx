import { useEffect, useRef, useState } from 'react';
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import Carousel from '../components/Carousel';  
import "../styles/Home.css"

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!showIntro) return;
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = v.play?.();
    if (tryPlay && typeof tryPlay.then === 'function') {
      tryPlay.catch(() => {
        // Autoplay might be blocked; rely on fallback timeout
      });
    }

    const onEnded = () => {
      setShowIntro(false);
    };
    v.addEventListener('ended', onEnded);

    const fallback = setTimeout(() => {
      setShowIntro(false);
    }, 8000);

    return () => {
      v.removeEventListener('ended', onEnded);
      clearTimeout(fallback);
    };
  }, [showIntro]);

  return (
    <>
      {showIntro && (
        <div className="intro-overlay" aria-hidden="true">
          <video
            ref={videoRef}
            className="intro-video"
            src="/netflix-intro.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
          />
        </div>
      )}

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
             I’m a Final Year Computer Engineering student and a full-stack developer who enjoys developing user-friendly products with good design. From an on demand Spotify Wrapped to a virtual speech-to-speech therapist, I love building stuff. I predominantly work with the MEAN and MERN stack. Outside of tech, I play Basketball and Tug of War for my college. I bring curiosity, teamwork, and a drive to keep improving.
            </h2>
            <h4>Computer Science Student | Full Stack Developer</h4>
            <div className="buttons-homepage">
              <button onClick={() => window.open("/AnshShetty - RESUME.pdf", "_blank")}><FaPlay /> Resume</button>
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
    </>
  );
}

export default Home;
