import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import projects from '../assets/files/projects.json';
import styled from 'styled-components';

function ProjectPage(props) {
  const activeProjects = projects.filter(project => project.active);

  return (
    <div className="project-page-div">
      <PageHeader title="Projects" />
      <ProjectCardDiv>
        {activeProjects.map((project) => (
          <ProjectCard
            key={project.cardTitle}
            cardTitle={project.cardTitle}
            projectDescription={project.projectDescription}
            githubLink={project.githubLink}
          />
        ))}
      </ProjectCardDiv>
    </div>
  );
}

const ProjectCardDiv = styled.div`
  margin-left: 40px;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  align-content: space-around;
`;

export default ProjectPage;
