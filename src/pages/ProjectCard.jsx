import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ name, description, github }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`project-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className="card-front">
          <h3>{name}</h3>
        </div>
        <div className="card-back">
          <p>{description}</p>
          <a href={github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
