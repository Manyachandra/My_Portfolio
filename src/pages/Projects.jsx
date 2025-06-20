// client/src/pages/Projects.jsx
import React from 'react';
import './ProjectCard.css';
import ProjectCard from './ProjectCard'; // Ensure path is correct

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        <ProjectCard
          name="ClubHub"
          description="Created an official platform providing comprehensive information on upcoming, current, and past events organized by
 10+ clubs of NIT Patna."
          github="https://github.com/Manyachandra/NITP-ClubHub"
        />
        <ProjectCard
          name="Travel Diaries"
          description="A webapplication for traveler and blogger content in 4 formats: text, audio, video, and pictures"
          github="https://github.com/Manyachandra/travelDiaries"
        />
      </div>
    </section>
  );
};

export default Projects;
