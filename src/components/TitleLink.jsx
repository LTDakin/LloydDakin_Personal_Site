import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import rightArrow from '../assets/images/right-arrow.png';

function titleLink(props) {
  return (
    <StyledTitleLink className="nav-link" to={props.path}>
      <h1 style={{ fontSize: '7rem', fontFamily: 'coolvetica' }}>
        {props.buttonText}
      </h1>
    </StyledTitleLink>
  );
}

const StyledTitleLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: var(--off-black);
  transition: var(--transition-speed);

  span {
    z-index: 2;
  }

  &:hover {
    color: var(--off-white);
    background-color: var(--off-black);
  }

  &:hover:after {
    width: 10%;
  }

  &:after {
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 70px;
    background-image: url(${rightArrow});
    filter: brightness(0) invert(1);
    transition: all var(--transition-speed);
  }
`;

export default titleLink;
