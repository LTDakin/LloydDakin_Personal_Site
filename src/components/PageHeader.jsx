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
        <BackText $isHidden={!isHovered}>Go Back</BackText>
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
  font-family: var(--text-font);
  font-size: 4rem;
  margin: 0;
  transition: var(--transition-speed);
  display: ${(props) => (props.$isHidden ? 'none' : 'block')};
`;

const BackText = styled.h1`
  font-family: var(--text-font);
  font-size: 4rem;
  margin: 0;
  transition: var(--transition-speed);
  display: ${(props) => (props.$isHidden ? 'none' : 'block')};
`;

const PageHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: var(--base-margin);
  transition: var(--transition-speed);
  padding: var(--base-padding);

  &:hover {
    filter: invert(1);
    background-color: var(--off-white);
  }
`;

const LeftArrow = styled.img`
  transition: var(--transition-speed);
  transform: scaleX(-1) scale(0.8);

  ${PageHeaderWrapper}:hover & {
    transform: scaleX(-1) scale(1);
  }
`;

export default PageHeader;
