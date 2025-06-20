// client/src/pages/Experience.jsx

import React from "react";
import "./Experience.css";
import logo1 from "../assests/AMAZON LOGO.png"; // Update with actual paths
import logo2 from "../assests/GDSC.png"; // ✅ match actual folder


import logo3 from "../assests/headstarter.jpeg";
import logo4 from "../assests/Screenshot (1993).png"; // ✅ this should match your folder spelling


const experiences = [
  {
    id: 1,
    title: "Amazon ML Summer School  - 2024",
    
    description: "I completed a 2-month Amazon ML Summer School program, gaining an in-depth understanding of machine learning. The curriculum covered core concepts such as supervised and unsupervised learning, model evaluation, and included hands-on coding exercises through expert-led sessions and real-world problem-solving.",
    logo: logo1,
    side: "left",
  },
  {
    id: 2,
    title: "Google Developer Student Club 2024 ",
    company: "Web Developer Coordinator",
    description: " Designed and led 3 internal projects and operated a web team of 10 members.",
    logo: logo2,
    side: "right",
  },
  {
    id: 3,
    title: "Headstarter AI - 2024",
    company: "Software Engineering Fellowship",
    description: "I successfully completed a 7-week hands-on training program in Artificial Intelligence and Software Development. During this time, I gained practical experience in building intelligent systems, implementing machine learning models, and developing efficient software solutions",
    logo: logo3,
    side: "left",
  },
  {
    id: 4,
    title: "Hackslash",
    company: "Web Developer",
    description: "Collaborated with a team of 10 members to build  full-stack web applications, focusing on end-to-end development and effective team coordination.",
    logo: logo4,
    side: "right",
  },
];

export default function Experience() {
  return (
    <div className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={`timeline-item ${exp.side === "left" ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <img src={exp.logo} alt="logo" className="timeline-logo" />
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
