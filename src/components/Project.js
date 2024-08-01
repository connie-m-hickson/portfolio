import React from "react";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-gallery">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
