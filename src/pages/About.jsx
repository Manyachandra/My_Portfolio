// src/pages/About.jsx
import React from "react";
import "./About.css";


const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2>
          About <span className="highlight">ME.</span>
        </h2>
        <p>
          I'm a final year student at NIT Patna pursuing Computer Science and Engineering.
          I am a full-stack web developer with expertise in frameworks like React and Node.js.
          I am also a ML enthusiast. I am a workaholic who wants to try everything that other people can do.
          Let's work together to solve some real-world problems!
        </p>

        <div className="cards">
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/2721/2721291.png" alt="Web Developer" />
            <h3>Web Developer</h3>
          </div>
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/1995/1995454.png" alt="frontent Developer" />
            <h3>Backend Developer</h3>
          </div>
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png" alt="Backend Developer" />
            <h3>UI-UX Designer</h3>
          </div>
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" alt="ML " />
            <h3>Data Structures<br />and Algorithms</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
