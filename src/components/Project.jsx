import React, { useState, useEffect } from "react";
import '../styles/Project.css';

const Projects = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [activeFilter, setActiveFilter] = useState('all');
    const [featuredProject, setFeaturedProject] = useState(0);

   const projectData = [
    {
        id: 1,
        name: "Spotistats",
        tagline: "Why wait for Spotify Wrapped",
        description: "Web-based dashboard for instant music analytics",
        info: "Developed a web-based dashboard using Angular, Node.js, Express, and Spotify API to display users' top tracks and artists with full listening history and individual song analytics. Built to deliver instant, personalized music analytics using Angular frontend and Node/Express backend with Spotify OAuth. Focused on async API calls, rate-limit handling, and visualizations. Implemented secure OAuth 2.0 authentication and designed interactive visualizations with shareable summary cards. Learned secure OAuth flows, data mapping, efficient async patterns, and crafting shareable UI insights.",
        category: "fullstack",
        skills: [
            "Angular", "Node.js", "Express.js",
            "Asynchronous Requests", "OAuth 2.0 Authentication", "RESTful API Development", "Spotify API Integration",
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
        info: "Engineered a MERN stack job portal with job search, filtering, application tracking, and bulk posting features supporting 500+ listings. Created a scalable solution to support bulk listings and search with indexed queries, pagination, and optimized APIs for lower latency. Designed and integrated RESTful APIs for job posting and application tracking, reducing request latency by ~20%. Built a responsive, high-performance frontend, improving user experience and increasing page load speed by ~15%. Optimized databases to reduce query time by 20%, and implemented secure authentication. Gained experience in practical database indexing, search/filter design, API performance tuning, and frontend-backend coordination for large datasets.",
        category: "fullstack",
        skills: [
            "MongoDB", "Express.js", "React", "Node.js", "RESTful API Development",
            "Database Optimization", "Authentication","Responsive Design", "Full-Stack Development"
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
        info: "Built a voice-first virtual assistant using MEAN Stack, ElevenLabs, and Gemini APIs, supporting 100+ voice commands and real-time interactions. Integrated speech-to-text and text-to-speech with API models for context-aware, personalized responses. Focused on async orchestration, session context, and modular components to enable real-time, context-aware interactions. Constructed modular backend/frontend components with asynchronous workflows, improving response efficiency and capable of handling 1000+ queries daily. Gained expertise in API chaining, latency mitigation, privacy considerations, and designing robust conversational flows.",
        category: "fullstack",
        skills: [
            "Express.js", "Angular", "Node.js", "ElevenLabs API",
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
        info: "Developed a mental health platform combining tracking, journaling, and AI insights using Angular and Node.js. Built features including an AI Chatbot, habit tracking, mood monitoring, and personalized insights. Designed a responsive Angular frontend and implemented secure REST APIs with Node.js and Express.js. Created MongoDB schemas for time-series mood data, user habits, and diary entries, with full CRUD functionality and interactive progress charts. Focused on product-driven feature design, data modeling for user metrics, and presenting insights to drive engagement. Implemented secure REST endpoints and learned effective techniques for user engagement through data visualization.",
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
        info: "Built a real-time driver fatigue detector using computer vision and machine learning to monitor drivers and trigger safety alerts. Implemented drowsiness detection, alert mechanisms, and continuous monitoring to prevent accidents. Focused on low-latency processing and model inference for real-time performance. Gained experience in dataset labeling, model evaluation, latency optimization, and deploying computer vision models for edge-like real-time use cases.",
        category: "ai-ml",
        skills: ["Python", "Machine Learning","Computer Vision", "Real-time Processing"],
        link: "https://github.com/shetty-ansh/Drive-Safe-Driver-Fatigue-Detection-",
        featured: false,
        status: true
    },
    {
        id: 6,
        name: "FMC Backend API",
        tagline: "Enterprise-grade API solutions",
        description: "RESTful API with JWT authentication for ship management",
        info: "Implemented a secure REST API for ship management with JWT authentication, validation, and clear error handling. Built with Node.js, Express, and MongoDB (Mongoose) for managing users and ships. Features include JWT-based authentication, secure password handling, user registration/login, and CRUD operations for ships. Focused on route protection, consistent responses, and comprehensive API documentation. Learned best practices in authentication, API design, error handling, and building maintainable backend services.",
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
        info: "Built a comprehensive platform for monitoring and tracking civic issues, enabling citizens to report problems and track resolution progress. Implemented using Angular and Node.js with Express.js and MongoDB. Focused on creating intuitive reporting workflows, status tracking, and engagement features for local government initiatives. Designed with attention to moderation, transparency, and user experience. Gained experience in building user-submitted workflows, notification systems, and handling inconsistent external data sources.",
        category: "fullstack",
        skills: ["Angular", "Node.js", "Express.js", "MongoDB", "REST APIs"],
        link: "https://github.com/shetty-ansh/CivicTracker",
        featured: false,
        status: false
    },
    {
        id: 8,
        name: "Netflix Portfolio",
        tagline: "Entertainment meets professionalism",
        description: "Netflix-inspired portfolio project",
        info: "Designed and developed a unique portfolio website inspired by Netflix's UI/UX principles, built with React and Tailwind CSS. Created an engaging, cinematic interface with smooth animations and responsive design. Focused on implementing polished interactions, responsive layouts, and advanced CSS animations. Learned techniques for component reuse, responsive design patterns, and creating a delightful user experience while maintaining performance.",
        category: "frontend",
        skills: ["React", "Tailwind CSS", "Frontend Design", "UI/UX", "Responsive Design"],
        link: "https://github.com/shetty-ansh/netflix-portfolio",
        featured: false,
        status: true
    },
    {
        id: 9,
        name: "Cognita",
        tagline: "AI Powered Complete Learning Platform",
        description: "Complete learning management system",
        info: "Built a comprehensive learning platform with AI-powered features, course management, and progress tracking. Developed using React and Node.js, the platform personalizes learning experiences with recommendation logic and interactive modules. Focused on creating an intuitive UI/UX for both learners and educators. Implemented features for course management, progress tracking, and AI-enhanced personalization. Gained expertise in personalization strategies, scaling content delivery, and designing effective tracking systems for learning outcomes.",
        category: "fullstack",
        skills: ["React", "Node.js", "AI Integration", "Learning Management", "UI/UX Design"],
        link: "https://github.com/shetty-ansh/cognita",
        featured: false,
        status: false
    },
    {
        "id": 10,
        "name": "Zenskar CSV Processing Pipeline",
        "tagline": "Automated Modular Data Upload System",
        "description": "A complete modular CSV processing and upload pipeline built using Windmill and MockAPI.",
        "info": "Designed and implemented a modular CSV processing system using Windmill, featuring data validation, transformation, and API upload automation. Integrated error handling, retry logic, and detailed logging for each batch and record. Configured MockAPI as a simulated backend for testing API integrations.",
        "category": "backend",
        "skills": ["Python", "Docker", "Windmill", "mockapi.io", "API Integration", "Data Transformation", "Automation"],
        "link": "https://github.com/shetty-ansh/zenskar-csv-pipeline",
        "featured": false,
        "status": true
    }    
];


    const activeProjects = projectData.filter(project => project.status === true);
    const inactiveProjects = projectData.filter(project => project.status === false);

    const categories = [
        { id: 'all', name: 'All Projects', count: activeProjects.length },
        { id: 'fullstack', name: 'Full Stack', count: activeProjects.filter(p => p.category === 'fullstack').length },
        { id: 'ai-ml', name: 'AI & ML', count: activeProjects.filter(p => p.category === 'ai-ml').length },
        { id: 'backend', name: 'Backend', count: activeProjects.filter(p => p.category === 'backend').length },
        { id: 'frontend', name: 'Frontend', count: activeProjects.filter(p => p.category === 'frontend').length }
    ];

    const filteredProjects = activeFilter === 'all'
        ? activeProjects
        : activeProjects.filter(project => project.category === activeFilter);

    const featuredProjects = activeProjects.filter(project => project.featured);

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
    }, [filteredProjects, inactiveProjects]);

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

    const renderProjectGrid = (projects, showAsInactive = false) => (
        <div className="projects-grid">
            {projects.map((project, index) => {
                const isVisible = visibleItems.has(project.id);
                const categoryColor = getCategoryColor(project.category);

                return (
                    <article
                        key={project.id}
                        className={`project-item ${isVisible ? 'visible' : ''} ${showAsInactive ? 'inactive-project' : ''}`}
                        data-id={project.id}
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            '--category-color': categoryColor
                        }}
                    >
                        <div className="project-card">
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

                            <div className="card-content">
                                <h3 className="project-name">{project.name}</h3>
                                <p className="project-tagline">{project.tagline}</p>
                                <p className="project-description">{project.description}</p>

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

                            <footer className="card-footer">
                                {!showAsInactive ? (
                                    <>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <span><i className="fa fa-play" aria-hidden="true"></i> Play</span> 
                                        </a>
                                        <a className="project-info">
                                            <span><i className="fa fa-info-circle" aria-hidden="true"></i> More</span>
                                        </a>
                                    </>
                                ) : (
                                    <div className="coming-soon-badge">
                                        Coming Soon
                                    </div>
                                )}
                            </footer>
                        </div>
                    </article>
                );
            })}
        </div>
    );

    return (
        <div className="projects-container">
            <div className="pre-hero">
                <span className="section-title" id="hero-badge-text">Trending in Projects</span>
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

                        <div className="hero-actions">
                            <a
                                href={featuredProjects[featuredProject]?.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-btn primary"
                            >
                                <i className="fa fa-play" aria-hidden="true"></i> Play
                            </a>
                            <button className="hero-btn secondary">
                                <i className="fa fa-info-circle" aria-hidden="true"></i> More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects-section" id="nav-panel">
                        <p className="section-title">Continue Watching</p>
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
            </section>

            <section className="projects-section">
                {renderProjectGrid(filteredProjects)}
            </section>

            {inactiveProjects.length > 0 && (
                <section className="projects-section">
                    <div className="header-content">
                        <p className="section-title">Coming Soon</p>
                    </div>
                    {renderProjectGrid(inactiveProjects, true)}
                </section>
            )}
        </div>
    );
};

export default Projects;