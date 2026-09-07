import React from 'react';
import BackButton from './BackButton';

const PageHeader = ({ title }) => {
  return (
    <>
      <div className="page-header d-flex justify-content-between">
        <h1
          style={{
            fontFamily: 'coolvetica',
            fontSize: '4rem',
          }}
        >
          {title}
        </h1>
        <BackButton />
      </div>
    </>
  );
};

export default PageHeader;
