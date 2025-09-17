import React from "react";

const Project = ({project}) => {
    return (
        <div className="project-card">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>{project.features}</p>
          <ul>
            {project.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      );
}

export default Project

