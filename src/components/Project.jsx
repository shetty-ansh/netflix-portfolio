import React, { useState, useEffect } from "react";
import '../styles/Project.css';

const Projects = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [activeFilter, setActiveFilter] = useState('all');
    const [featuredProject, setFeaturedProject] = useState(0);

    // Project data from your file
    const projectData = [
        {
            id: 1,
            name: "Spotistats",
            tagline: "Why wait for Spotify Wrapped",
            description: "Web-based dashboard for instant music analytics",
            features: "Developed a web-based dashboard using Angular, Node.js, Express, and Spotify API to display users top tracks and artists with full listening history and individual song analytics using API integration, asynchronous requests, and secure workflows. Designed interactive visualizations and sharable summary cards to provide personalized music insights ~10% Orchestrated secure user authentication with OAuth 2.0, cutting login time by 30%",
            category: "fullstack",
            skills: [
                "Angular", "Node.js", "Express.js", "Spotify API Integration",
                "Asynchronous Requests", "OAuth 2.0 Authentication", "RESTful API Development",
                "Data Visualization", "UI/UX Design"
            ],
            link: "https://github.com/shetty-ansh/Spotistats",
            featured: true,
            status: true
        },
        {
            id: 2,
            name: "Career Crate",
            tagline: "Your next opportunity awaits",
            description: "MERN stack job portal with search and filtration",
            features: "Engineered a MERN stack job portal with job search, filtering, application tracking, and bulk posting features supporting 500+ listings. Designed and integrated RESTful APIs for job posting, application tracking, and reducing request latency by ~20%. Built a responsive, high-performance frontend, improving user experience and increasing page load speed by ~15%. Optimized databases to reduce query time by 20%, and implemented authentication.",
            category: "fullstack",
            skills: [
                "MongoDB", "Express.js", "React", "Node.js", "RESTful API Development",
                "Database Optimization", "Authentication", "Frontend Performance",
                "Responsive Design", "Full-Stack Development"
            ],
            link: "https://github.com/shetty-ansh/CareerCrate-",
            featured: true,
            status: true
        },
        {
            id: 3,
            name: "IRA Therapist",
            tagline: "Your AI companion for mental wellness",
            description: "Virtual assistant with real-time voice interaction",
            features: "Built a virtual assistant using MEAN Stack, ElevenLabs and Gemini APIs, supporting 100+ voice commands and real-time interactions. Integrated speech-to-text, text-to-speech with API models for context-aware, personalized responses. Constructed modular backend/frontend components with asynchronous workflows, improving response efficiency and capable of handling 1000+ queries daily.",
            category: "fullstack",
            skills: [
                "MongoDB", "Express.js", "Angular", "Node.js", "ElevenLabs API",
                "Gemini API", "Speech-to-Text", "Text-to-Speech", "Asynchronous Workflows"
            ],
            link: "https://github.com/shetty-ansh/ira-therapist",
            featured: true,
            status: true
        },
        {
            id: 4,
            name: "SattvaApp",
            tagline: "Mental health meets technology",
            description: "Mental health platform with AI-driven insights",
            features: "Developed a mental health platform with features like an AI Chatbot, habit tracking, journaling, mood monitoring, and AI-powered insights. Designed a responsive Angular front-end and built secure REST APIs using Node.js and Express.js. Implemented a MongoDB schema to store user habits, mood logs, and diary entries, with full CRUD functionality and interactive progress charts.",
            category: "fullstack",
            skills: [
                "Angular", "Node.js", "Express.js", "MongoDB", "AI Chatbot",
                "REST APIs", "CRUD Operations", "Data Visualization",
                "Responsive Design", "User Engagement"
            ],
            link: "https://github.com/shetty-ansh/SattvaApp",
            featured: false,
            status: true
        },
        {
            id: 5,
            name: "Drive-Safe",
            tagline: "Safety through intelligence",
            description: "Driver fatigue detection system",
            features: "AI-based system for detecting driver fatigue using real-time monitoring with computer vision and machine learning algorithms. Implements drowsiness detection, alert mechanisms, and continuous monitoring to prevent accidents.",
            category: "ai-ml",
            skills: ["Python", "OpenCV", "Machine Learning", "Driver Monitoring", "Computer Vision", "Real-time Processing"],
            link: "https://github.com/shetty-ansh/Drive-Safe-Driver-Fatigue-Detection-",
            featured: false,
            status: true
        },
        {
            id: 6,
            name: "FMC Backend API",
            tagline: "Enterprise-grade API solutions",
            description: "RESTful API with JWT authentication for ship management",
            features: "A RESTful API built with Node.js, Express, and MongoDB (Mongoose) for managing users and ships. Includes JWT-based authentication, secure password handling, validation, and consistent error responses. Features user registration/login, CRUD operations for ships, protected routes, and comprehensive API documentation.",
            category: "backend",
            skills: ["JavaScript", "MongoDB", "Express", "Node.js", "Postman", "API Documentation", "JWT", "Authentication"],
            link: "https://github.com/shetty-ansh/fathom-marine-consultants-task",
            featured: false,
            status: true
        },
        {
            id: 7,
            name: "CivicTracker",
            tagline: "Democracy in action",
            description: "Track and manage civic issues",
            features: "A comprehensive platform for monitoring and tracking civic issues, enabling citizens to report problems, track resolution progress, and engage with local government initiatives.",
            category: "fullstack",
            skills: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Civic Engagement"],
            link: "https://github.com/shetty-ansh/CivicTracker",
            featured: false,
            status: false
        },
        {
            id: 8,
            name: "Netflix Portfolio",
            tagline: "Entertainment meets professionalism",
            description: "Netflix-inspired portfolio project",
            features: "A unique portfolio website designed with Netflix's UI/UX principles, showcasing projects in an engaging, cinematic interface with smooth animations and responsive design.",
            category: "frontend",
            skills: ["React", "Tailwind CSS", "Frontend Design", "UI/UX", "Responsive Design"],
            link: "https://github.com/shetty-ansh/netflix-portfolio",
            featured: false,
            status: true
        },
        {
            id: 8,
            name: "Cognita",
            tagline: "AI Powered Complete Learning Platform",
            description: "Netflix-inspired portfolio project",
            features: "A unique portfolio website designed with Netflix's UI/UX principles, showcasing projects in an engaging, cinematic interface with smooth animations and responsive design.",
            category: "frontend",
            skills: ["React", "Tailwind CSS", "Frontend Design", "UI/UX", "Responsive Design"],
            link: "https://github.com/shetty-ansh/cognita",
            featured: false
        }

    ];

    const categories = [
        { id: 'all', name: 'All Projects', count: projectData.length },
        { id: 'fullstack', name: 'Full Stack', count: projectData.filter(p => p.category === 'fullstack').length },
        { id: 'ai-ml', name: 'AI & ML', count: projectData.filter(p => p.category === 'ai-ml').length },
        { id: 'backend', name: 'Backend', count: projectData.filter(p => p.category === 'backend').length },
        { id: 'frontend', name: 'Frontend', count: projectData.filter(p => p.category === 'frontend').length }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projectData
        : projectData.filter(project => project.category === activeFilter);

    const featuredProjects = projectData.filter(project => project.featured);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = parseInt(entry.target.dataset.id);
                        setVisibleItems(prev => new Set([...prev, id]));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, [filteredProjects]);

    // Auto-rotate featured project
    useEffect(() => {
        const interval = setInterval(() => {
            setFeaturedProject(prev => (prev + 1) % featuredProjects.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [featuredProjects.length]);

    const getCategoryColor = (category) => {
        switch (category) {
            case 'fullstack': return '#E50914';
            case 'ai-ml': return '#00D4AA';
            case 'backend': return '#FF6B35';
            case 'frontend': return '#ffd710ff';
            default: return '#ffffff';
        }
    };

    return (
        <div className="projects-container">
            {/* Hero Featured Project */}
            <div className="pre-hero">
            <span className="hero-badge-text">Trending in Projects</span>
            </div>
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-project">
                        <div className="hero-badge">
                            <div className="hero-badge-line"></div>
                        </div>

                        <h1 className="hero-title">{featuredProjects[featuredProject]?.name}</h1>
                        <p className="hero-tagline">{featuredProjects[featuredProject]?.tagline}</p>
                        <p className="hero-description">{featuredProjects[featuredProject]?.description}</p>

                    </div>
                
                </div>
                <div className="hero-actions">
                            <a
                                href={featuredProjects[featuredProject]?.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-btn primary"
                            >
                                <i class="fa fa-play" aria-hidden="true"></i>  Play
                            </a>
                            <button className="hero-btn secondary">
                                <i class="fa fa-info-circle" aria-hidden="true"></i> More
                            </button>
                        </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <header className="section-header">
                    <div className="header-content">
                        <p className="section-title">Continue Watching</p>
                    </div>

                    {/* Filter Navigation */}
                    <nav className="filter-nav">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                                onClick={() => setActiveFilter(category.id)}
                            >
                                {category.name}
                                <span className="filter-count">({category.count})</span>
                            </button>
                        ))}
                    </nav>
                </header>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => {
                        const isVisible = visibleItems.has(project.id);
                        const categoryColor = getCategoryColor(project.category);

                        return (
                            <article
                                key={project.id}
                                className={`project-item ${isVisible ? 'visible' : ''}`}
                                data-id={project.id}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    '--category-color': categoryColor
                                }}
                            >
                                <div className="project-card">
                                    {/* Card Header */}
                                    <header className="card-header">
                                        <div className="project-meta">
                                            <span
                                                className="project-type"
                                                style={{ color: categoryColor }}
                                            >
                                                {project.category}
                                            </span>
                                        </div>
                                        <div
                                            className="category-indicator"
                                            style={{ backgroundColor: categoryColor }}
                                        ></div>
                                    </header>

                                    {/* Card Content */}
                                    <div className="card-content">
                                        <h3 className="project-name">{project.name}</h3>
                                        <p className="project-tagline">{project.tagline}</p>
                                        <p className="project-description">{project.description}</p>

                                        {/* Skills Tags */}
                                        <div className="skills-tags">
                                            {project.skills.slice(0, 3).map((skill, idx) => (
                                                <span key={idx} className="skill-tag">
                                                    {skill}
                                                </span>
                                            ))}
                                            {project.skills.length > 3 && (
                                                <span className="skill-tag more">
                                                    +{project.skills.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                    </div>

                                    {/* Card Footer */}
                                    <footer className="card-footer">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <span><i class="fa fa-play" aria-hidden="true"></i>  Play</span> 
                                        </a>
                                        <a className="project-info">
                                            <span><i class="fa fa-info-circle" aria-hidden="true"></i> More</span>
                                        </a>
                                    </footer>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
            <section>
            <p className="section-title">Coming Soon</p>

            </section>
        </div>
    );
};

export default Projects;