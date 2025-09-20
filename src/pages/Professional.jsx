import React, { useState, useEffect } from "react";
import '../styles/Professional.css';
// import { roadmapData } from "../data/roadmapData.js";

const roadmapData = [
        {
            id: 1,
            period: "Mar – Jun 2025",
            year: "2025",
            title: "Tech Intern",
            subtitle: "Chrysalis Technosoft",
            type: "work",
            description: "Enhanced jobs247 platform with significant performance improvements and feature development.",
            highlights: [
                "Improved dashboard responsiveness by 20%",
                "Integrated RESTful APIs and handled NoSQL data",
                "Debugged production features",
                "Agile collaboration reducing delivery time by 10%"
            ]
        },
        {
            id: 2,
            period: "Dec 2024 – Jan 2025",
            year: "2024",
            title: "ML Intern",
            subtitle: "Suvidha Foundation",
            type: "work",
            description: "Developed comprehensive machine learning solutions with end-to-end pipeline implementation.",
            highlights: [
                "Built ML pipelines from data scraping to model training",
                "Applied NLP with spaCy framework",
                "Boosted model accuracy by 10% using XGBoost",
                "Expertise in preprocessing and feature engineering"
            ]
        },
        {
            id: 3,
            period: "Aug 2023 – Jul 2024",
            year: "2023",
            title: "Junior Manager",
            subtitle: "AIESEC in Mumbai",
            type: "leadership",
            description: "Led strategic recruitment initiatives and international volunteer programs with measurable impact.",
            highlights: [
                "Led city-wide recruitment: 180+ applications, 20% intake increase",
                "Managed onboarding of foreign volunteers",
                "Collaborated with 20+ international partners",
                "Enhanced CRM and negotiation capabilities"
            ]
        },
        {
            id: 4,
            period: "2022 – Present",
            year: "2022",
            title: "BE in Computer Science Engineering",
            subtitle: "TCET, SGPA 7.6",
            type: "education",
            description: "Currently pursuing Bachelor's degree with strong academic performance and diverse extracurricular involvement.",
            highlights: [
                "Smart India Hackathon (Top Team)",
                "Oscillation Hackathon (Finalist)",
                "Research Projects: Driver Fatigue Detection, Smart Irrigation",
                "Sports: Basketball & Tug of War Representative",
                "Technical Skills: MEAN/MERN Stacks, ML, APIs",
                "Leadership: SIH Team Lead, Discipline Incharge (Zephyr Fest)",
                "Social Impact: Teaching underprivileged children"
            ]
        },
        {
            id: 5,
            period: "2020 – 2022",
            year: "2020",
            title: "Junior College (HSC)",
            type: "education",
            description: "Higher Secondary Certificate, preparing for engineering studies with focus on science and mathematics.",
            highlights: []
        },
        {
            id: 6,
            period: "2010 – 2020",
            year: "2010",
            title: "Schooling (ICSE Board)",
            type: "education",
            description: "Completed foundational education under ICSE curriculum, building strong academic fundamentals.",
            highlights: []
        }
    ];

const Professional = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [activeFilter, setActiveFilter] = useState('all');

    

    const filteredData = activeFilter === 'all' 
        ? roadmapData 
        : roadmapData.filter(item => item.type === activeFilter);

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
            { threshold: 0.2 }
        );

        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, [filteredData]);

    const getTypeData = (type) => {
        switch (type) {
            case 'education':
                return {
                    icon: '◆',
                    color: '#ffffff',
                    bgColor: '#2a2a2a'
                };
            case 'work':
                return {
                    icon: '●',
                    color: '#ff4444',
                    bgColor: '#1a1a1a'
                };
            case 'Volunteering':
                return {
                    icon: '▲',
                    color: '#ffaa00',
                    bgColor: '#2a2a2a'
                };
            default:
                return {
                    icon: '◆',
                    color: '#ffffff',
                    bgColor: '#2a2a2a'
                };
        }
    };

    return (
        <div className="professional-container">
            {/* Header Section */}
            <header className="header">
                <div className="header-content">
                    <div className="title-section">
                        <h1 className="main-title">
                            My
                            <span className="title-accent">Experience</span>
                        </h1>
                        <div className="title-line"></div>
                    </div>
                    
                    <div className="subtitle-section">
                        <p className="subtitle">The Journey so far</p>
                        <span className="subtitle-accent">Latest first</span>
                    </div>
                </div>

                {/* Filter Navigation */}
                <nav className="filter-nav">
                    <button 
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        ALL
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'work' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('work')}
                    >
                        WORK
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'education' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('education')}
                    >
                        EDUCATION
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'Volunteering' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('Volunteering')}
                    >
                        VOLUNTEERING
                    </button>
                </nav>
            </header>

            {/* Timeline Section */}
            <main className="timeline-section">
                <div className="timeline-container">
                    {filteredData.map((item, index) => {
                        const typeData = getTypeData(item.type);
                        const isVisible = visibleItems.has(item.id);
                        
                        return (
                            <article
                                key={item.id}
                                className={`timeline-item ${isVisible ? 'visible' : ''}`}
                                data-id={item.id}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Year Marker */}
                                <div className="year-marker">
                                    <span className="year-text">{item.year}</span>
                                    <div 
                                        className="year-dot"
                                        style={{ 
                                            color: typeData.color,
                                            backgroundColor: typeData.bgColor 
                                        }}
                                    >
                                        {typeData.icon}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="content-card">
                                    <header className="card-header">
                                        <div className="period-badge">
                                            {item.period}
                                        </div>
                                        <div 
                                            className="type-badge"
                                            style={{ color: typeData.color }}
                                        >
                                            {item.type.toUpperCase()}
                                        </div>
                                    </header>

                                    <div className="card-content">
                                        <h2 className="card-title">{item.title}</h2>
                                        {item.subtitle && (
                                            <h3 
                                                className="card-subtitle"
                                                style={{ color: typeData.color }}
                                            >
                                                {item.subtitle}
                                            </h3>
                                        )}

                                        <p className="card-description">
                                            {item.description}
                                        </p>

                                        {item.highlights.length > 0 && (
                                            <div className="highlights">
                                                <h4 className="highlights-title">Key Achievements</h4>
                                                <ul className="highlights-list">
                                                    {item.highlights.map((highlight, idx) => (
                                                        <li key={idx} className="highlight-item">
                                                            <span 
                                                                className="highlight-marker"
                                                                style={{ backgroundColor: typeData.color }}
                                                            ></span>
                                                            {highlight}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Connection Line */}
                                {index < filteredData.length - 1 && (
                                    <div className="connection-line"></div>
                                )}
                            </article>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default Professional;