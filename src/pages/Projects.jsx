// import React, { useRef } from 'react';
// import projectData from '../data/projectsData';
// import '../styles/Projects.css';

// const ProjectsPage = () => {
//   const carouselRef = useRef(null);

//   const scrollLeft = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: -300,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: 300,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className="projects-container">
//       <h2 className="section-title">My Projects</h2>
//       <div className="carousel-wrapper">
//         <button className="carousel-button left" onClick={scrollLeft}>
//           &lt;
//         </button>
//         <div className="carousel" ref={carouselRef}>
//           {projectData.map((project, index) => (
//             <div key={index} className="project-card">
//               <div className="project-image">
//                 {project.images && project.images.length > 0 ? (
//                   <img src={project.images[0]} alt={project.name} />
//                 ) : (
//                   <div className="placeholder-image">{project.name.charAt(0)}</div>
//                 )}
//               </div>
//               <div className="project-info">
//                 <h3>{project.name}</h3>
//                 <p className="project-description">{project.description}</p>
//                 <a 
//                   href={project.link} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="project-link"
//                 >
//                   View Project
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="carousel-button right" onClick={scrollRight}>
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;