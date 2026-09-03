import React from 'react';
import { Link } from 'react-router-dom';

import './components.css';

function titleLink(props) {
  return (
    <Link
      className="nav-link d-flex justify-content-center align-items-center big-nav-link"
      to={props.path}
    >
      <div className="nav-link d-flex justify-content-center align-items-center">
        <h1
          className="big-nav-link-text"
          style={{ fontSize: '7rem', fontFamily: 'coolvetica' }}
        >
          {props.buttonText}
        </h1>
      </div>
    </Link>
  );
}

export default titleLink;
