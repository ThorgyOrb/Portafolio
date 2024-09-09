import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectList = [
    { title: 'Project 1', description: 'Description of Project 1', link: 'https://github.com/username/project1' },
    { title: 'Project 2', description: 'Description of Project 2', link: 'https://github.com/username/project2' },
    // Añade más proyectos según sea necesario
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;