import React, { useState, useEffect } from "react";
import '../styles/Skills.css';

const Skills = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [activeFilter, setActiveFilter] = useState('all');

    const skillsData = [
        { id: 1, name: "Python", category: "language", icon: "◆" },
        { id: 2, name: "JavaScript", category: "language", icon: "◆" },
        { id: 3, name: "TypeScript", category: "language", icon: "◆" },
        { id: 4, name: "Java", category: "language", icon: "◆" },
        { id: 5, name: "HTML", category: "language",  icon: "◆" },
        { id: 6, name: "CSS", category: "language",  icon: "◆" },
        { id: 7, name: "React", category: "framework", icon: "●" },
        { id: 8, name: "Angular", category: "framework", icon: "●" },
        { id: 9, name: "Node.js", category: "framework", icon: "●" },
        { id: 10, name: "Express", category: "framework", icon: "●" },
        { id: 11, name: "MongoDB", category: "database", icon: "▲" },
        { id: 12, name: "PostgreSQL", category: "database", icon: "▲" },
        { id: 13, name: "MySQL", category: "database", icon: "▲" },
        { id: 14, name: "GitHub", category: "tool", icon: "◇" },
        { id: 15, name: "Postman", category: "tool", icon: "◇" },
        { id: 16, name: "RESTful APIs", category: "tool", icon: "◇" },
        { id: 17, name: "JSON Handling", category: "tool", icon: "◇" },
        { id: 18, name: "JWT", category: "security", icon: "★" },
        { id: 19, name: "OAuth 2.0", category: "security", icon: "★" }
    ];

    const categories = [
        { id: 'all', name: 'ALL', count: skillsData.length },
        { id: 'language', name: 'LANGUAGES', count: skillsData.filter(skill => skill.category === 'language').length },
        { id: 'framework', name: 'FRAMEWORKS', count: skillsData.filter(skill => skill.category === 'framework').length },
        { id: 'database', name: 'DATABASES', count: skillsData.filter(skill => skill.category === 'database').length },
        { id: 'tool', name: 'TOOLS', count: skillsData.filter(skill => skill.category === 'tool').length },
        { id: 'security', name: 'SECURITY', count: skillsData.filter(skill => skill.category === 'security').length }
    ];

    const filteredSkills = activeFilter === 'all' 
        ? skillsData 
        : skillsData.filter(skill => skill.category === activeFilter);

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

        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, [filteredSkills]);

    const getCategoryColor = (category) => {
        switch (category) {
            case 'language': return '#ff4444';
            case 'framework': return '#ffaa00';
            case 'database': return '#00ff88';
            case 'tool': return '#44aaff';
            case 'security': return '#aa44ff';
            default: return '#ffffff';
        }
    };

    return (
        <div className="skills-container">
            <header className="skills-header">
                <div className="header-content">
                    <div className="title-section">
                        <h1 className="main-title">
                            TECHNICAL
                            <span className="title-accent">SKILLS</span>
                        </h1>
                        <div className="title-line"></div>
                        <p className="title-description">
                            Comprehensive toolkit spanning full-stack development, 
                            machine learning, and modern web technologies
                        </p>
                    </div>
                    
                    <div className="stats-section">
                        <div className="stat-item">
                            <span className="stat-number">{skillsData.length}</span>
                            <span className="stat-label">Total Skills</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">{categories.length - 1}</span>
                            <span className="stat-label">Categories</span>
                        </div>
                    </div>
                </div>

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

            {/* Skills Grid */}
            <main className="skills-section">
                <div className="skills-grid">
                    {filteredSkills.map((skill, index) => {
                        const isVisible = visibleItems.has(skill.id);
                        const categoryColor = getCategoryColor(skill.category);
                        
                        return (
                            <div
                                key={skill.id}
                                className={`skill-item ${isVisible ? 'visible' : ''}`}
                                data-id={skill.id}
                                style={{ 
                                    animationDelay: `${index * 0.05}s`,
                                    '--category-color': categoryColor
                                }}
                            >
                                <div className="skill-card">
                                    <div className="skill-icon">{skill.icon}</div>
                                    
                                    <div className="skill-content">
                                        <h3 className="skill-name">{skill.name}</h3>
                                        <p className="skill-category">{skill.category.toUpperCase()}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Category Legend */}
                <div className="category-legend">
                    <h3 className="legend-title">SKILL CATEGORIES</h3>
                    <div className="legend-grid">
                        {categories.slice(1).map((category) => (
                            <div key={category.id} className="legend-item">
                                <div 
                                    className="legend-color"
                                    style={{ backgroundColor: getCategoryColor(category.id) }}
                                ></div>
                                <span className="legend-label">{category.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Skills;
