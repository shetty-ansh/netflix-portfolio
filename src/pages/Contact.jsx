// const Contact = () => {

//     const [currentTime, setCurrentTime] = useState(new Date());

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <div>

//             <div className="main-div">
//                 <div className="carousel"></div>
//                 <div className="contact-card">
//                     <div className="my-image"></div>
//                     <h1>Hi! I'm Ansh</h1>
//                     <h2>Here's how we can get in touch</h2>
//                     <div id="socials-container">
//                         <button className="socials-button">Email</button>
//                         <button className="socials-button">Github</button>
//                         <button className="socials-button">LinkedIn</button>
//                         <button className="socials-button">Instagram</button>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Contact

import React, { useState, useEffect } from "react";
import '../styles/Contact.css';

const Contact = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const carouselImages = [
        {
            src: "/contact-me-image-3.jpg",
            alt: "IMG 3"
        },
        {
            src: "/contact-me-image-4.jpg",
            alt: "IMG 4"
        },
        {
            src: "/contact-me-image-5.jpg",
            alt: "IMG 5"
        },
        {
            src: "/contact-me-image-6.jpg",
            alt: "IMG 6"
        },
        // Duplicate images for seamless loop
        {
            src: "/contact-me-image-3.jpg",
            alt: "IMG 3"
        },
        {
            src: "/contact-me-image-4.jpg",
            alt: "IMG 4"
        },
        {
            src: "/contact-me-image-5.jpg",
            alt: "IMG 5"
        },
        {
            src: "/contact-me-image-6.jpg",
            alt: "IMG 6"
        }
    ];

    const socialButtons = [
        {
            name: "Email",
            icon: "📧",
            action: () => window.open("mailto:ansh.shetty.22@gmail.com"),
            color: "#4A90E2"
        },
        {
            name: "GitHub",
            icon: "💻",
            action: () => window.open("https://github.com/shetty-ansh", "_blank"),
            color: "#333333"
        },
        {
            name: "LinkedIn",
            icon: "💼",
            action: () => window.open("https://linkedin.com/in/ansh-shetty", "_blank"),
            color: "#0077B5"
        },
        {
            name: "Instagram",
            icon: "📸",
            action: () => window.open("https://instagram.com/anshshetty_", "_blank"),
            color: "#E4405F"
        }
    ];

    // Continuous scrolling animation
    useEffect(() => {
        const interval = setInterval(() => {
            setScrollPosition(prev => {
                const newPosition = prev + 1;
                // Reset when we've scrolled through half the images (due to duplication)
                if (newPosition >= (carouselImages.length / 2) * 300) {
                    return 0;
                }
                return newPosition;
            });
        }, 5); // Smooth 50ms updates for continuous movement

        return () => clearInterval(interval);
    }, [carouselImages.length]);

    return (
        <div className="contact-container">
            <div className="main-div">
                {/* Vertical Carousel for Desktop - 30% */}
                <div className="carousel vertical-carousel">
                    <div
                        className="carousel-track vertical-track"
                        style={{
                            transform: `translateY(-${scrollPosition}px)`
                        }}
                    >
                        {carouselImages.map((image, index) => (
                            <div
                                key={index}
                                className="carousel-item vertical-item"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="carousel-image"
                                />
                                <div className="image-overlay"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Card - 70% */}
                <div className="contact-card-container">
                    <div className="contact-card">
                        <div className="my-image">
                            <img
                                src="/contact-me-image-1.jpg"
                                alt="Ansh Shetty"
                                className="profile-image"
                            />
                            <span id="location"><i class="fa fa-map-pin" id="location-pin" aria-hidden="true"></i> Mumbai</span>
                        </div>

                        <div className="card-content">
                            <h1 className="greeting">Hi! I'm Ansh</h1>
                            <h2 className="subtitle">Here's how we can connect</h2>

                            <div className="socials-container">
                                <button className="socials-button"><i className="fa fa-envelope-o" aria-hidden="true"></i></button>
                                <button className="socials-button"><i className="fa fa-github" aria-hidden="true"></i></button>
                                <button className="socials-button"><i className="fa fa-linkedin" aria-hidden="true"></i></button>
                                <button className="socials-button"><i className="fa fa-instagram" aria-hidden="true"></i></button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Horizontal Carousel for Mobile */}
            <div className="horizontal-carousel">
                <div
                    className="carousel-track horizontal-track"
                    style={{
                        transform: `translateX(-${scrollPosition}px)`
                    }}
                >
                    {carouselImages.map((image, index) => (
                        <div
                            key={index}
                            className="carousel-item horizontal-item"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="carousel-image"
                            />
                            <div className="image-overlay"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;