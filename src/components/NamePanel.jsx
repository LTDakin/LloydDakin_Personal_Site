import styled from 'styled-components';
import githubIcon from '../assets/images/github.png';
import linkedinIcon from '../assets/images/linkedIn.png';

import IconLink from './SocialsIcon';

function NamePanel() {
  return (
    <NamePanelContainer>
      <h1>Lloyd Dakin</h1>
      <h3>Software Engineer</h3>
      <SocialsRow>
        <IconLink
          href="https://github.com/LTDakin?tab=repositories"
          src={githubIcon}
          alt="github icon"
        />
        <IconLink
          href="https://www.linkedin.com/in/lloyd-dakin/"
          src={linkedinIcon}
          alt="linkedin icon"
        />
      </SocialsRow>
    </NamePanelContainer>
  );
}

const NamePanelContainer = styled.div`
  justify-content: left;

  h1 {
    font-size: clamp(1.5rem, 6vw, 6rem);
    font-weight: bolder;
    font-family: 'LemonMilk';
    margin: 0;
  }

  h3 {
    fontsize: clamp(1.5rem, 2vw, 3rem);
    font-weight: 300;
    font-family: 'LemonMilk';
    margin: 0;
  }
`;

const SocialsRow = styled.div`
  display: flex;
  gap: var(--base-gap);
  margin-top: var(--base-margin);
`;

export default NamePanel;
