import styled from 'styled-components';
import githubIcon from '../assets/images/github.png';
import linkedinIcon from '../assets/images/linkedIn.png';

import IconLink from './SocialsIcon';

function NamePanel() {
  return (
    <NamePanelWrapper>
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
    </NamePanelWrapper>
  );
}

const NamePanelWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  justify-content: left;
  align-content: center;
  padding-left: 20px;
  font-family: 'LemonMilk';
  font-weight: bolder;
  color: var(--off-white);
  background-color: var(--off-black);

  h1 {
    font-size: clamp(1.5rem, 6vw, 6rem);
    margin: 0;
  }

  h3 {
    fontsize: clamp(1.5rem, 2vw, 3rem);
  }
`;

const SocialsRow = styled.div`
  display: flex;
  gap: var(--base-gap);
  margin-top: var(--base-margin);
`;

export default NamePanel;
