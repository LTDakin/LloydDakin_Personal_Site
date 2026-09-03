import React from 'react';
import BackButton from '../components/BackButton';
import ProjectCard from '../components/ProjectCard';
import projects from '../assets/projects.json';

function ProjectPage(props) {
  const activeProjects = projects.filter(project => project.active);

  return (
    <div className="project-page-div">
      <div className="page-header d-flex justify-content-between">
        <h1 style={{ fontFamily: 'coolvetica', fontSize: '4em' }}>Projects</h1>
        <BackButton />
      </div>
      <div className="project-cards-div-container">
        <div className="project-cards-div">
          {activeProjects.map(project => (
            <ProjectCard
              key={project.cardTitle}
              cardTitle={project.cardTitle}
              projectDescription={project.projectDescription}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
