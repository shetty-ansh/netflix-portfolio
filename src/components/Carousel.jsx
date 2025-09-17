import React from "react";
import "./Carousel.css"

const Carousel = () => {
    return(
        <div className="carousel-container">
            <div id="projects" className="trending-options"> 
                <img className='cover-image' src="/projects-cover.png" alt="My Projects" />
                Check out my Projects!
            </div>

            <div id="skills" className="trending-options"> 
                <img className='cover-image' src="/skills-cover.png" alt="My Skills" />
                Check out the Skills I've gained!
            </div>

            <div id="experience" className="trending-options"> 
                <img className='cover-image' src="/experience-cover.png" alt="My Work Experience" />
                Check out my Work Experience!
            </div>

            <div id="contact" className="trending-options"> 
                <img className='cover-image' src="/projects-cover.png" alt="My Contact Information" />
                Contact Me!
            </div>

            <div id="academics" className="trending-options"> 
                <img className='cover-image' src="/projects-cover.png" alt="My Academics" />
                Check out my Academics!

            </div>

            <div id="extra-curricular" className="trending-options"> 
                <img className='cover-image' src="/projects-cover.png" alt="Extra Curricular" />
                Extra Curricular
            </div>
        </div>
    )
}

export default Carousel



// On hovering over a card the bottom hald houldshow some text