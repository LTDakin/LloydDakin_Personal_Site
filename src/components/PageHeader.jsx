import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import rightArrow from '../assets/images/right-arrow.png';

const PageHeader = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledLink
      to={'/'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <PageHeaderWrapper>
        <Title $isHidden={isHovered}>{title}</Title>
        <Title $isHidden={!isHovered}>Go Back</Title>
        <LeftArrow src={rightArrow} alt="back button" />
      </PageHeaderWrapper>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Title = styled.h1`
  position: absolute;
  font-family: var(--text-font);
  font-size: 4rem;
  margin: 0;
  visibility: ${(props) => (props.$isHidden ? 'hidden' : 'visible')};
  pointer-events: none;
`;

// set the color background so that it doesn't invert to a pure black
const PageHeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: var(--base-margin);
  transition: var(--transition-speed);
  padding: var(--base-padding);

  &:hover {
    filter: invert(1);
    background-color: var(--grey);
  }
`;

const LeftArrow = styled.img`
  transition: var(--transition-speed);
  transform: scaleX(-1) scale(0.8);
  margin-left: auto;

  ${PageHeaderWrapper}:hover & {
    transform: scaleX(-1) scale(0.8) translateX(20%);
  }
`;

export default PageHeader;
