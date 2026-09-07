import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import rightArrow from '../assets/images/right-arrow.png';

function TitleLink(props) {
  return (
    <StyledTitleLink className="nav-link" to={props.path}>
      <img className="arrow" src={rightArrow} />
      <h1>{props.buttonText}</h1>
    </StyledTitleLink>
  );
}

const StyledTitleLink = styled(Link)`
  --slide-amount: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--off-black);
  transition: all var(--transition-speed);

  h1 {
    font-family: var(--text-font);
    font-size: 7rem;
    transition: transform var(--transition-speed);
  }

  img.arrow {
    margin-right: 10px;
    filter: invert(1);
    transition: transform var(--transition-speed);
  }

  &:hover {
    color: var(--off-white);
    background-color: var(--off-black);
  }

  &:hover h1 {
    transform: translateX(calc(-1 * var(--slide-amount)));
  }

  &:hover img.arrow {
    transform: translateX(calc(-1 * var(--slide-amount)));
  }
`;

export default TitleLink;
