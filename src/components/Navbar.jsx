import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navItems = [
  { path: "/", label: "Home", icon: <HomeIcon /> },
  { path: "/experience", label: "Experience", icon: <WorkIcon /> },
  { path: "/skills", label: "Skills", icon: <BuildIcon /> },
  { path: "/projects", label: "Projects", icon: <BarChartIcon /> },
  { path: "/reachout", label: "Reach Out", icon: <EmailIcon /> }
];


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img 
        src="/ansh-shetty.png" 
        alt="ansh-shetty" 
        className="nav-logo"
      />
      
      {isMobile ? (
        <>
          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? "✕" : "☰"}
          </button>
          
          {/* Mobile Menu Overlay */}
          <div 
            className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  <span className="mobile-nav-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Desktop Navigation */
        <div className="nav-links">
          <Link to="/"><button className="nav-buttons">Home</button></Link>
          <Link to="/experience"><button className="nav-buttons">Experience</button></Link>
          <Link to="/skills"><button className="nav-buttons">Skills</button></Link>
          <Link to="/projects"><button className="nav-buttons">Projects</button></Link>
          <Link to="/reachout"><button className="nav-buttons">Reach Out</button></Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;