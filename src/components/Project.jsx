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
        info: "Developed a web-based dashboard using Angular, Node.js, Express, and Spotify API to display users top tracks and artists with full listening history and individual song analytics using API integration, asynchronous requests, and secure workflows. Designed interactive visualizations and sharable summary cards to provide personalized music insights ~10% Orchestrated secure user authentication with OAuth 2.0, cutting login time by 30%",
        category: "fullstack",
        skills: [
            "Angular", "Node.js", "Express.js",
            "Asynchronous Requests", "OAuth 2.0 Authentication", "RESTful API Development", "Spotify API Integration",
            "Data Visualization", "UI/UX Design"
        ],
        link: "https://github.com/shetty-ansh/Spotistats",
        featured: true,
        status: true,
        info: "Built to deliver instant, personalized music analytics using Angular frontend and Node/Express backend with Spotify OAuth. Focused on async API calls, rate-limit handling and visualizations. Learned secure OAuth flows, data mapping, efficient async patterns, and crafting shareable UI insights."
    },
    {
        id: 8,
        name: "Career Crate",
        tagline: "Your next opportunity awaits",
        description: "MERN stack job portal with search and filtration",
        info: "Engineered a MERN stack job portal with job search, filtering, application tracking, and bulk posting features supporting 500+ listings. Designed and integrated RESTful APIs for job posting, application tracking, and reducing request latency by ~20%. Built a responsive, high-performance frontend, improving user experience and increasing page load speed by ~15%. Optimized databases to reduce query time by 20%, and implemented authentication.",
        category: "fullstack",
        skills: [
            "MongoDB", "Express.js", "React", "Node.js", "RESTful API Development",
            "Database Optimization", "Authentication","Responsive Design", "Full-Stack Development"
        ],
        link: "https://github.com/shetty-ansh/CareerCrate-",
        featured: false,
        status: true,
        info: "Created a scalable MERN job portal to support bulk listings and search. Implemented indexed queries, pagination, and optimized APIs for lower latency. Learned practical database indexing, search/filter design, API performance tuning, and frontend-backend coordination for large datasets."
    },
    {
       "id": 3,
      "name": "IRA Therapist",
      "tagline": "Your AI companion for mental wellness",
      "description": "Virtual ADHD assistant with real-time voice interaction",
      "info": "Built a virtual ADHD therapist using MEAN Stack, ElevenLabs, Gemini APIs, and n8n for real-time, voice-based adaptive interactions. Integrated Redis caching as a long-term memory layer, improving personalized recall. Supported 100+ adaptive voice commands with highly context-aware responses. Implemented RAG + async workflows to boost response accuracy by 35% and optimized performance to handle 1K+ daily queries with low latency.",
      "category": "fullstack",
      "skills": [
        "Angular", "Node.js", "Express.js", "MongoDB",
        "Redis", "ElevenLabs API", "Gemini API",
        "Speech-to-Text", "Text-to-Speech", "n8n", "RAG", "Asynchronous Workflows"
      ],
      "link": "https://github.com/shetty-ansh/nirva-therapist",
      "featured": true,
      "status": true
    },
    {
      "id": 4,
      "name": "IRA – Ideate, Research, Act",
      "tagline": "AI GTM Research & Lead Automation",
      "description": "Automated GTM research and early lead discovery",
      "info": "Developed an AI-powered GTM companion that automates market research and new-idea validation, cutting manual effort by ~70%. Analyzes 50+ articles and reports to generate 2–4 page viability summaries with idea scoring, competitor mapping, and trend insights in under 90 seconds. Automates lead discovery by identifying 3–5 LinkedIn professionals per idea with outreach drafts, improving prospecting speed by 40%. Generates downloadable reports for faster GTM decision-making.",
      "category": "fullstack",
      "skills": [
        "Node.js", "Angular", "Express.js", "Web Scraping",
        "LLM Prompting", "Market Analysis", "Automation Workflows",
        "API Integration", "Cron Jobs", "RAG", "CSV Pipelines"
      ],
      "link": "https://github.com/shetty-ansh/research-market-assistant",
      "featured": true,
      "status": true
    },
    {
        id: 5,
        name: "SattvaApp",
        tagline: "Mental health meets technology",
        description: "Mental health platform with AI-driven insights",
        info: "Developed a mental health platform with features like an AI Chatbot, habit tracking, journaling, mood monitoring, and AI-powered insights. Designed a responsive Angular front-end and built secure REST APIs using Node.js and Express.js. Implemented a MongoDB schema to store user habits, mood logs, and diary entries, with full CRUD functionality and interactive progress charts.",
        category: "fullstack",
        skills: [
            "Angular", "Node.js", "Express.js", "MongoDB", "AI Chatbot",
            "REST APIs", "CRUD Operations", "Data Visualization",
            "Responsive Design", "User Engagement"
        ],
        link: "https://github.com/shetty-ansh/SattvaApp",
        featured: false,
        status: true,
        info: "Developed a mental-health platform combining tracking, journaling, and AI insights using Angular and Node.js. Built schemas for time-series mood data and secured REST endpoints. Learned product-driven feature design, data modeling for user metrics, and presenting insights to drive engagement."
    },
    {
        id: 6,
        name: "Drive-Safe",
        tagline: "Safety through intelligence",
        description: "Driver fatigue detection system",
        info: "AI-based system for detecting driver fatigue using real-time monitoring with computer vision and machine learning algorithms. Implements drowsiness detection, alert mechanisms, and continuous monitoring to prevent accidents.",
        category: "ai-ml",
        skills: ["Python", "Machine Learning","Computer Vision", "Real-time Processing"],
        link: "https://github.com/shetty-ansh/Drive-Safe-Driver-Fatigue-Detection-",
        featured: false,
        status: true,
        info: "Built a real-time driver fatigue detector using computer vision and ML to trigger safety alerts. Implemented model inference and low-latency processing. Learned dataset labeling, model evaluation, latency optimization, and deploying CV models for edge-like real-time use cases."
    },
    {
        id: 7,
        name: "FMC Backend API",
        tagline: "Enterprise-grade API solutions",
        description: "RESTful API with JWT authentication for ship management",
        info: "A RESTful API built with Node.js, Express, and MongoDB (Mongoose) for managing users and ships. Includes JWT-based authentication, secure password handling, validation, and consistent error responses. Features include user registration/login, CRUD operations for ships, protected routes, and comprehensive API documentation.",
        category: "backend",
        skills: ["JavaScript", "MongoDB", "Express", "Node.js", "Postman", "API Documentation", "JWT", "Authentication"],
        link: "https://github.com/shetty-ansh/fathom-marine-consultants-task",
        featured: false,
        status: true,
        info: "Implemented a secure REST API for ship management with JWT auth, validation, and clear error handling. Focused on route protection, consistent responses, and documentation. Learned best practices in auth, API ergonomics, and building maintainable backend services."
    },
    {
        id: 2,
        name: "CivicTracker",
        tagline: "Democracy in action",
        description: "Track and manage civic issues",
        info: "A comprehensive platform for monitoring and tracking civic issues, enabling citizens to report problems, track resolution progress, and engage with local government initiatives.",
        category: "fullstack",
        skills: ["Angular", "Node.js", "Express.js", "MongoDB", "REST APIs"],
        link: "https://github.com/shetty-ansh/CivicTracker",
        featured: false,
        status: false,
        info: "Built to let citizens report and track civic issues using Angular and Node. Implemented reporting workflows and status tracking with attention to moderation and transparency. Learned designing user-submitted workflows, notification flows, and handling inconsistent external data."
    },
    {
        id: 9,
        name: "Netflix Portfolio",
        tagline: "Entertainment meets professionalism",
        description: "Netflix-inspired portfolio project",
        info: "A unique portfolio website designed with Netflix's UI/UX principles, showcasing projects in an engaging, cinematic interface with smooth animations and responsive design.",
        category: "frontend",
        skills: ["React", "Tailwind CSS", "Frontend Design", "UI/UX", "Responsive Design"],
        link: "https://github.com/shetty-ansh/netflix-portfolio",
        featured: false,
        status: true,
        info: "Designed a cinematic portfolio inspired by Netflix UI using React and Tailwind. Focused on animations, responsive layouts and polished interactions. Learned advanced CSS animations, component reuse, responsive patterns, and making UX feel ‘‘delightful’’ while performant."
    },
    {
        id: 10,
        name: "Cognita",
        tagline: "AI Powered Complete Learning Platform",
        description: "Complete learning management system",
        info: "A comprehensive learning platform with AI-powered features, course management, progress tracking, and interactive learning modules designed to enhance educational experiences.",
        category: "fullstack",
        skills: ["React", "Node.js", "AI Integration", "Learning Management", "UI/UX Design"],
        link: "https://github.com/shetty-ansh/cognita",
        featured: false,
        status: false,
        info: "Built an AI-enhanced learning platform to personalize courses and track progress using React and Node. Integrated recommendation logic and interactive modules. Learned personalization strategies, scaling content delivery, and designing tracking systems for learning outcomes."
    },
    {
        "id": 11,
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