import React from "react";

function JobDescription(props) {
  const title = props.title;
  const tech = props.tech.map((techItem) => (
    <span className="job-tech-item">{techItem}</span>
  ));
  const points = props.points.map((point) => (
    <p className="job-point">{point}</p>
  ));
  return (
    <div className="job-description-component">
      <h2 className="job-title">{title}</h2>
      {tech}
      {points}
    </div>
  );
}

export default JobDescription;
