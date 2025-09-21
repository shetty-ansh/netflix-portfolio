import React, { useState, useEffect } from "react";
import '../styles/Contact.css';

const Contact = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const desktopCarouselImages = [
        {
            src: "/contact-me-image-3.jpg",
            alt: "Image 1"
        },
        {
            src: "/contact-me-image-4.jpg",
            alt: "Image 2"
        },
        {
            src: "/contact-me-image-5.jpg",
            alt: "Image 3"
        },
        {
            src: "/contact-me-image-6.jpg",
            alt: "Image 4"
        }
    ];

    const mobileCarouselImages = [
        {
            src: "/contact-me-image-3.jpg",
            alt: "Mobile 1"
        },
        {
            src: "/contact-me-image-4.jpg",
            alt: "Mobile 2"
        },
        {
            src: "/contact-me-image-5.jpg",
            alt: "Mobile 3"
        },
        {
            src: "/contact-me-image-6.jpg",
            alt: "Mobile 4"
        }
    ];

    const socialButtons = [
        {
            name: "Email",
            label: <i class="fa fa-envelope" aria-hidden="true"></i>,
            handle: "ansh.shetty.22@gmail.com",
            action: () => window.open("mailto:ansh.shetty.22@gmail.com")
        },
        {
            name: "GitHub",
            label: <i class="fa fa-github" aria-hidden="true"></i>,
            handle: "/shetty-ansh",
            action: () => window.open("https://github.com/shetty-ansh", "_blank")
        },
        {
            name: "LinkedIn",
            label: <i class="fa fa-linkedin" aria-hidden="true"></i>
,
            handle: "/ansh-shetty",
            action: () => window.open("https://linkedin.com/in/ansh-shetty", "_blank")
        },
        {
            name: "Instagram",
            label: <i class="fa fa-instagram" aria-hidden="true"></i>
,
            handle: "@anshshetty_",
            action: () => window.open("https://instagram.com/anshshetty_", "_blank")
        }
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleCardFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const renderDesktopCarousel = (images) => (
        <div className="vertical-carousel-container">
            <div className="vertical-carousel-track">
                {/* Triple the images for smooth infinite loop */}
                {[...images, ...images, ...images].map((image, index) => (
                    <div key={index} className="vertical-carousel-item">
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
    );

    const renderMobileCarousel = (images) => (
        <div className="horizontal-carousel-container">
            <div className="horizontal-carousel-track">
                {/* Triple the images for smooth infinite loop */}
                {[...images, ...images, ...images].map((image, index) => (
                    <div key={index} className="horizontal-carousel-item">
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
    );

    return (
        <div className="contact-container">
            {/* Desktop Layout */}
            {!isMobile && (
                <div className="desktop-layout">
                    <div className="left-section">
                        <div className="vertical-carousel">
                            {renderDesktopCarousel(desktopCarouselImages)}
                        </div>
                        <div className="decorative-elements">
                            <div className="red-block"></div>
                            <div className="white-block"></div>
                        </div>
                    </div>

                    <div className="desktop-main-content">
                        <div className="portfolio-section">
                            <div className="portfolio-text">
                                <div className="portfolio-line-1">CONTACT</div>
                                <div className="portfolio-line-2">CONNECT</div>
                                <div className="portfolio-line-3">CREATE</div>
                            </div>
                            
                            <div className="social-links-container">
                                {socialButtons.map((social, index) => (
                                    <div key={index} className="social-link">
                                        <span className="social-label">{social.label}</span>
                                        <span 
                                            className="social-handle"
                                            onClick={social.action}
                                        >
                                            {social.handle}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                            onClick={handleCardFlip}
                        >
                            <div className="flip-card-front">
                                <div className="profile-section">
                                    <img
                                        src="/contact-me-image-1.jpg"
                                        alt="Ansh Shetty"
                                        className="profile-image"
                                    />
                                </div>
                                
                                <div className="card-info">
                                    <h1 className="name">ANSH SHETTY</h1>
                                    <p className="title">FULL STACK DEVELOPER</p>
                                    <div className="location">
                                        <span className="location-text">MUMBAI, INDIA</span>
                                    </div>
                                </div>

                                <div className="click-hint">
                                    <span id="laptop-clicktoflip">CLICK TO FLIP</span>
                                    
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="bio-section">
                                    <h2 className="bio-title">ABOUT</h2>
                                    <p className="bio-text">
                                        I love design and anything related to art. 
                                        I approach problems in a rational and pragmatic 
                                        way, always aiming for the simplest and most 
                                        functional solutions possible.
                                    </p>
                                    
                                    
                                </div>

                                <div className="click-hint">
                                    <span>CLICK TO FLIP BACK</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Layout */}
            {isMobile && (
                <div className="mobile-layout">
                    <div className="mobile-header">
                        <div className="mobile-connect-text">CONNECT</div>
                    </div>

                    <div className="mobile-card-section">
                        <div
                            className={`mobile-flip-card ${isFlipped ? 'flipped' : ''}`}
                            onClick={handleCardFlip}
                        >
                            <div className="flip-card-front">
                                <div className="profile-section">
                                    <img
                                        src="/contact-me-image-1.jpg"
                                        alt="Ansh Shetty"
                                        className="profile-image"
                                    />
                                </div>
                                
                                <div className="card-info">
                                    <h1 className="name">ANSH SHETTY</h1>
                                    <p className="title">FULL STACK DEVELOPER</p>
                                    <div className="location">
                                        <span className="location-text">MUMBAI, INDIA</span>
                                    </div>
                                </div>

                                <div className="click-hint">
                                    <span>CLICK TO FLIP</span>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="bio-section">
                                    <h2 className="bio-title">ABOUT</h2>
                                    <p className="bio-text">
                                        I love design and anything related to art. 
                                        I approach problems in a rational and pragmatic 
                                        way, always aiming for the simplest and most 
                                        functional solutions possible.
                                    </p>
                                    
                                </div>

                                <div className="click-hint">
                                    <span>CLICK TO FLIP BACK</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-social-section">
                        <div className="social-links-container">
                            {socialButtons.map((social, index) => (
                                <div key={index} className="social-link">
                                    <span className="social-label">{social.label}</span>
                                    <span 
                                        className="social-handle"
                                        onClick={social.action}
                                    >
                                        {social.handle}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mobile-carousel-section">
                        {renderMobileCarousel(mobileCarouselImages)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;