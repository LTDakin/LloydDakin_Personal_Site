
import githubIcon from '../assets/images/github.png';
import styled from 'styled-components';

function ProjectCard(props) {
  return (
    <ProjectCardWrapper>
      <h2>{props.cardTitle}</h2>
      <p>{props.projectDescription}</p>
      <GithubLink
        target="_blank"
        rel="noreferrer"
        href={props.githubLink}
      >
        <CardGithubIcon alt="github" src={githubIcon}></CardGithubIcon>
        <p>View on Github</p>
      </GithubLink>
    </ProjectCardWrapper>
  );
}

const CardGithubIcon = styled.img`
  height: 40px;
  filter: invert(0);
  transition: var(--transition-speed);
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 2;
`;

const GithubLink = styled.a`
  p {
    font-size: 1em;
    color: var(--off-white);
    text-decoration: none;
    position: absolute;
    bottom: 0px;
    right: 40px;
    transition: var(--transition-speed);
    filter: opacity(0);
  }

  &:hover {
    & ${CardGithubIcon} {
      transform: scale(1.2);
    }

    & p {
      right: 60px;
      filter: opacity(1);
    }
  }
`;

const ProjectCardWrapper = styled.div`
  position: relative;
  color: var(--off-black);
  background-color: var(--off-white);
  display: flexbox;
  height: 370px;
  width: 250px;
  padding: 20px;
  transition: var(--transition-speed);
  border: 5px solid var(--off-black);
  margin: 20px;
  font-family: coolvetica;

  h2 {
    font-size: 2rem;
  }

  &:hover {
    color: var(--off-white);
    background-color: var(--off-black);

    & ${CardGithubIcon} {
      filter: invert(1);
    }
  }
`;

export default ProjectCard;
