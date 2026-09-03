import React from 'react';
import githubIcon from '../assets/images/github.png';
function ProjectCard(props) {
  return (
    <div className="project-card-div">
      <h2 className="card-title">{props.cardTitle}</h2>
      <p className="card-description">{props.projectDescription}</p>
      <a
        className="card-github-link"
        target="_blank"
        rel="noreferrer"
        href={props.githubLink}
      >
        <img className="card-github-icon" alt="github" src={githubIcon}></img>
        <p className="card-icon-text">View on Github</p>
      </a>
    </div>
  );
}

export default ProjectCard;
