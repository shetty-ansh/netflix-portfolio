import React, { useState, useEffect } from "react";

const Contact = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const desktopCarouselImages = [
        {
            src: "/contact-me-image-3.jpg",
            alt: "Desktop IMG 3"
        },
        {
            src: "/contact-me-image-4.jpg",
            alt: "Desktop IMG 4"
        },
        {
            src: "/contact-me-image-5.jpg",
            alt: "Desktop IMG 5"
        },
        {
            src: "/contact-me-image-6.jpg",
            alt: "Desktop IMG 6"
        }
    ];

    const mobileCarouselImages = [
        {
            src: "/mobile-contact-image-1.jpg",
            alt: "Mobile IMG 1"
        },
        {
            src: "/mobile-contact-image-2.jpg",
            alt: "Mobile IMG 2"
        },
        {
            src: "/mobile-contact-image-3.jpg",
            alt: "Mobile IMG 3"
        },
        {
            src: "/mobile-contact-image-4.jpg",
            alt: "Mobile IMG 4"
        }
    ];

    const socialButtons = [
        {
            name: "Email",
            icon: "fa fa-envelope-o",
            action: () => window.open("mailto:ansh.shetty.22@gmail.com"),
            color: "#4A90E2"
        },
        {
            name: "GitHub",
            icon: "fa fa-github",
            action: () => window.open("https://github.com/shetty-ansh", "_blank"),
            color: "#333333"
        },
        {
            name: "LinkedIn",
            icon: "fa fa-linkedin",
            action: () => window.open("https://linkedin.com/in/ansh-shetty", "_blank"),
            color: "#0077B5"
        },
        {
            name: "Instagram",
            icon: "fa fa-instagram",
            action: () => window.open("https://instagram.com/anshshetty_", "_blank"),
            color: "#E4405F"
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

    useEffect(() => {
        const interval = setInterval(() => {
            setScrollPosition(prev => {
                const currentImages = isMobile ? mobileCarouselImages : desktopCarouselImages;
                const imageSize = isMobile ? window.innerWidth : (window.innerWidth <= 1024 ? window.innerWidth : window.innerHeight);
                const totalImages = currentImages.length;
                const maxScroll = totalImages * imageSize;
                
                const newPosition = prev + 1;
                
                if (newPosition >= maxScroll) {
                    return 0;
                }
                return newPosition;
            });
        }, 20);

        return () => clearInterval(interval);
    }, [isMobile, mobileCarouselImages.length, desktopCarouselImages.length]);

    const handleCardFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const renderCarousel = (images, isHorizontal = false) => (
        <div
            style={{
                ...styles.carouselTrack,
                ...(isHorizontal ? styles.horizontalTrack : styles.verticalTrack),
                transform: isHorizontal 
                    ? `translateX(-${scrollPosition}px)`
                    : `translateY(-${scrollPosition}px)`,
                [isHorizontal ? 'width' : 'height']: `${images.length * 2 * 100}${isHorizontal ? 'vw' : 'vh'}`
            }}
        >

            {images.map((image, index) => (
                <div
                    key={index}
                    style={isHorizontal ? styles.horizontalItem : styles.verticalItem}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        style={styles.carouselImage}
                    />
                    <div style={styles.imageOverlay}></div>
                </div>
            ))}

            {images.map((image, index) => (
                <div
                    key={`duplicate-${index}`}
                    style={isHorizontal ? styles.horizontalItem : styles.verticalItem}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        style={styles.carouselImage}
                    />
                    <div style={styles.imageOverlay}></div>
                </div>
            ))}
        </div>
    );

    return (
        <div style={styles.contactContainer}>
            <div style={styles.mainDiv}>

                {!isMobile && (
                    <div style={styles.verticalCarousel}>
                        {renderCarousel(desktopCarouselImages)}
                    </div>
                )}

                <div style={isMobile ? styles.mobileContactCardContainer : styles.contactCardContainer}>
                    <div 
                        style={{
                            ...styles.flipCard,
                            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                        }}
                        onClick={handleCardFlip}
                    >
                        <div style={{...styles.flipCardSide, ...styles.flipCardFront}}>
                            <div style={styles.myImage}>
                                <img
                                    src="/contact-me-image-1.jpg"
                                    alt="Ansh Shetty"
                                    style={styles.profileImage}
                                />
                                <div style={styles.locationContainer}>
                                    <i className="fa fa-map-pin" style={styles.locationPin}></i>
                                    <span style={styles.locationText}>Mumbai, India</span>
                                </div>
                            </div>

                            <div style={styles.cardContent}>
                                <h1 style={styles.greeting}>Hi! I'm Ansh</h1>
                                <h2 style={styles.subtitle}>Here's how we can connect</h2>

                                <div style={styles.socialsContainer}>
                                    {socialButtons.map((social, index) => (
                                        <button
                                            key={index}
                                            style={{
                                                ...styles.socialsButton,
                                                '--social-color': social.color
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                social.action();
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.background = social.color;
                                                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                                                e.target.style.boxShadow = `0 8px 25px ${social.color}40`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                                e.target.style.transform = 'translateY(0) scale(1)';
                                                e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                                            }}
                                            title={social.name}
                                        >
                                            <i className={social.icon} style={styles.socialIcon}></i>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div style={styles.flipHint}>Click Me</div>
                        </div>

                        <div style={{...styles.flipCardSide, ...styles.flipCardBack}}>
                            <div style={styles.bioContent}>
                                <h2 style={styles.bioTitle}>About Me</h2>
                                <p style={styles.bioText}>
                                    I'm a passionate full-stack developer with a love for creating innovative solutions 
                                    that make a difference. With expertise in modern web technologies, I enjoy turning 
                                    complex problems into simple, beautiful, and intuitive designs.
                                </p>
                                <p style={styles.bioText}>
                                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                                    open-source projects, or capturing moments through photography. I believe in the 
                                    power of technology to transform lives and am always excited to work on projects 
                                    that push boundaries.
                                </p>
                                <div style={styles.skills}>
                                    <span style={styles.skill}>React</span>
                                    <span style={styles.skill}>Node.js</span>
                                    <span style={styles.skill}>Python</span>
                                    <span style={styles.skill}>JavaScript</span>
                                </div>
                            </div>
                            <div style={styles.flipHint}>Click to flip back</div>
                        </div>
                    </div>
                </div>
            </div>

            {isMobile && (
                <div style={styles.horizontalCarousel}>
                    {renderCarousel(mobileCarouselImages, true)}
                </div>
            )}
        </div>
    );
};

const styles = {
    contactContainer: {
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: '#ffffff',
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        overflow: 'hidden'
    },
    mainDiv: {
        display: 'flex',
        height: '100vh',
        position: 'relative'
    },
    verticalCarousel: {
        width: '40%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
    },
    horizontalCarousel: {
        height: '200px',
        position: 'relative',
        overflow: 'hidden',
        margin: '2rem 0',
        order: 2
    },
    carouselTrack: {
        transition: 'none'
    },
    verticalTrack: {
        display: 'flex',
        flexDirection: 'column'
    },
    horizontalTrack: {
        display: 'flex',
        height: '200px'
    },
    verticalItem: {
        height: '100vh',
        flexShrink: 0,
        position: 'relative'
    },
    horizontalItem: {
        width: '100vw',
        height: '200px',
        flexShrink: 0,
        position: 'relative'
    },
    carouselImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'brightness(0.7) contrast(1.2) saturate(1.1)',
        transition: 'all 0.8s ease'
    },
    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)',
        pointerEvents: 'none'
    },
    contactCardContainer: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem 3rem',
        position: 'relative',
        minHeight: '100vh',
        background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)'
    },
    mobileContactCardContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1rem',
        position: 'relative',
        minHeight: 'calc(100vh - 250px)',
        background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)',
        order: 1
    },
    flipCard: {
        width: '100%',
        maxWidth: '500px',
        height: '600px',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer'
    },
    flipCardSide: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        borderRadius: '20px',
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    flipCardFront: {
        transform: 'rotateY(0deg)'
    },
    flipCardBack: {
        transform: 'rotateY(180deg)'
    },
    flipHint: {
        position: 'absolute',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '0.9rem',
        color: 'rgba(255, 255, 255, 0.5)',
        fontStyle: 'italic'
    },
    myImage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2rem'
    },
    profileImage: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '3px solid #ffffff',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
        transition: 'all 0.3s ease',
        marginBottom: '1rem'
    },
    locationContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        fontSize: '1rem',
        color: '#cccccc'
    },
    locationPin: {
        fontSize: '1.2rem',
        color: '#ff6b6b'
    },
    locationText: {
        fontWeight: '400'
    },
    cardContent: {
        width: '100%'
    },
    greeting: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#ffffff',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    },
    subtitle: {
        fontSize: '1.1rem',
        fontWeight: '300',
        color: '#bbbbbb',
        lineHeight: 1.4,
        marginBottom: '2rem',
        maxWidth: '350px',
        margin: '0 auto 2rem auto'
    },
    socialsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.2rem',
        flexWrap: 'wrap'
    },
    socialsButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        background: 'rgba(255, 255, 255, 0.1)',
        color: '#ffffff',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        fontSize: '1.2rem',
        position: 'relative',
        overflow: 'hidden'
    },
    socialIcon: {
        fontSize: '1.2rem',
        zIndex: 2,
        position: 'relative'
    },
    bioContent: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bioTitle: {
        fontSize: '2rem',
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    },
    bioText: {
        fontSize: '1rem',
        color: '#cccccc',
        lineHeight: 1.6,
        marginBottom: '1.5rem',
        textAlign: 'center'
    },
    skills: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.8rem',
        justifyContent: 'center',
        marginTop: '1rem'
    },
    skill: {
        padding: '0.5rem 1rem',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '20px',
        fontSize: '0.9rem',
        color: '#ffffff'
    }
};

export default Contact;