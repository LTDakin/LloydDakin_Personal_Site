import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import projects from '../assets/files/projects.json';

function ProjectPage(props) {
  const activeProjects = projects.filter(project => project.active);

  return (
    <div className="project-page-div">
      <PageHeader title="Projects" />
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
