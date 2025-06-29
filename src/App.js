// // // import React from 'react';
// // // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// // // import futuristicVideo from './assests/mixkit-animation-of-futuristic-devices-99786-hd-ready.mp4';
// // // import profileImage from './assests/Portfoliopic.jpg';
// // // import githubIcon from './assests/icons8-github-50.png';
// // // import gmailIcon from './assests/icons8-gmail-48.png';
// // // import linkedinIcon from './assests/icons8-linkedin-48.png';

// // // import './App.css';

// // // // Page components
// // // // function Welcome() {
// // // //   return <h2>Welcome to My Portfolio</h2>;
// // // // }

// // // function Home() {
// // //   return (
// // //     <div style={{
// // //       display: 'flex',
// // //       justifyContent: 'center',
// // //       alignItems: 'center',
// // //       height: '100%',
// // //       padding: '2rem',
// // //       gap: '3rem',
// // //       flexWrap: 'wrap',
// // //       color: 'white',
// // //     }}>
// // //       {/* Text Section */}
// // //       <div style={{ maxWidth: '500px' }}>
// // //         <h2 style={{ marginBottom: '0.5rem' }}>Hello, It's Me</h2>
// // //         <h1 style={{ fontSize: '3rem', margin: '0.5rem 0', fontWeight: 'bold' }}>Manya Chandra</h1>
// // //         <h3 style={{ marginBottom: '1rem' }}>
// // //           And I'm a <span style={{ color: '#00d8ff' }}>Full Stack Developer</span>
// // //         </h3>
// // //         <p style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
// // //           "I am a web designer and a machine learning enthusiast."
// // //         </p>
// // //       </div>

// // //       {/* Image Section */}
// // //       <div>
// // //         <img
// // //           src={profileImage}
// // //           alt="Profile"
// // //           style={{
// // //             width: '230px',
// // //             height: '230px',
// // //             objectFit: 'cover',
// // //             borderRadius: '50%',
// // //             border: '4px solid white',
// // //             boxShadow: '0 0 25px #00f0ff, 0 0 45px #ff00f7',
// // //           }}
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function Contact() {
// // //   return (
// // //     <div>
// // //       <h2>Contact Me</h2>
// // //       <p>Email: your.email@example.com</p>
// // //     </div>
// // //   );
// // // }

// // // function About() {
// // //   return <h2>About Me</h2>;
// // // }

// // // function Projects() {
// // //   return <h2>My Projects</h2>;
// // // }

// // // function Skills() {
// // //   return <h2>My Skills</h2>;
// // // }

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <div className="app-container">
// // //         {/* Background Video */}
// // //         <video className="background-video" autoPlay loop muted>
// // //           <source src={futuristicVideo} type="video/mp4" />
// // //           Your browser does not support the video tag.
// // //         </video>

// // //         {/* Navigation */}
// // //         <nav className="navbar">
          
// // //           <Link to="/home">Home</Link>
// // //           <Link to="/about">About</Link>
// // //           <Link to="/projects">Projects</Link>
// // //           <Link to="/skills">Skills</Link>
// // //           <Link to="/contact">Contact</Link>
// // //         </nav>

// // //         {/* Page content */}
// // //         <div className="content">
// // //           <Routes>
// // //             <Route path="/home" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/projects" element={<Projects />} />
// // //             <Route path="/skills" element={<Skills />} />
// // //             <Route path="/contact" element={<Contact />} />
// // //           </Routes>
// // //         </div>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// // import futuristicVideo from './assests/mixkit-animation-of-futuristic-devices-99786-hd-ready.mp4';
// // import profileImage from './assests/Portfoliopic.jpg';
// // import githubIcon from './assests/icons8-github-50.png';
// // import gmailIcon from './assests/icons8-gmail-48.png';
// // import linkedinIcon from './assests/icons8-linkedin-48.png';

// // import './App.css';

// // function Home() {
// //   return (
// //     <div style={{
// //       display: 'flex',
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //       height: '100%',
// //       padding: '2rem',
// //       gap: '3rem',
// //       flexWrap: 'wrap',
// //       color: 'white',
// //       position: 'relative'
// //     }}>
      
// //       {/* Floating Icons */}
// //       <div className="falling-icons">
// //         <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
// //           <img src={githubIcon} alt="GitHub" className="icon-drop" />
// //         </a>
// //         <a href="mailto:your.email@gmail.com" target="_blank" rel="noopener noreferrer">
// //           <img src={gmailIcon} alt="Gmail" className="icon-drop" />
// //         </a>
// //         <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
// //           <img src={linkedinIcon} alt="LinkedIn" className="icon-drop" />
// // //         </a>
// // //       </div>

// // //       {/* Text Section */}
// // //       <div style={{ maxWidth: '500px' }}>
// // //         <h2 style={{ marginBottom: '0.5rem' }}>Hello, It's Me</h2>
// // //         <h1 style={{ fontSize: '3rem', margin: '0.5rem 0', fontWeight: 'bold' }}>Manya Chandra</h1>
// // //         <h3 style={{ marginBottom: '1rem' }}>
// // //           And I'm a <span style={{ color: '#00d8ff' }}>Full Stack Developer</span>
// // //         </h3>
// // //         <p style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
// // //           "I am a web designer and a machine learning enthusiast."
// // //         </p>
// // //       </div>

// // //       {/* Image Section */}
// // //       <div>
// // //         <img
// // //           src={profileImage}
// // //           alt="Profile"
// // //           style={{
// // //             width: '230px',
// // //             height: '230px',
// // //             objectFit: 'cover',
// // //             borderRadius: '50%',
// // //             border: '4px solid white',
// // //             boxShadow: '0 0 25px #00f0ff, 0 0 45px #ff00f7',
// // //           }}
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // Remaining components unchanged...
// // // function Contact() {
// // //   return (
// // //     <div>
// // //       <h2>Contact Me</h2>
// // //       <p>Email: your.email@example.com</p>
// // //     </div>
// // //   );
// // // }

// // // function About() {
// // //   return <h2>About Me</h2>;
// // // }

// // // function Projects() {
// // //   return <h2>My Projects</h2>;
// // // }

// // // function Skills() {
// // //   return <h2>My Skills</h2>;
// // // }

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <div className="app-container">
// // //         <video className="background-video" autoPlay loop muted>
// // //           <source src={futuristicVideo} type="video/mp4" />
// // //           Your browser does not support the video tag.
// // //         </video>

// // //         <nav className="navbar">
// // //           <Link to="/home">Home</Link>
// // //           <Link to="/about">About</Link>
// // //           <Link to="/projects">Projects</Link>
// // //           <Link to="/skills">Skills</Link>
// // //           <Link to="/contact">Contact</Link>
// // //         </nav>

// // //         <div className="content">
// // //           <Routes>
// // //             <Route path="/home" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/projects" element={<Projects />} />
// // //             <Route path="/skills" element={<Skills />} />
// // //             <Route path="/contact" element={<Contact />} />
// // //           </Routes>
// // //         </div>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
// import futuristicVideo from './assests/mixkit-animation-of-futuristic-devices-99786-hd-ready.mp4';
// import profileImage from './assests/Portfoliopic.jpg';
// import githubIcon from './assests/icons8-github-50.png';
// import gmailIcon from './assests/icons8-gmail-48.png';
// import linkedinIcon from './assests/icons8-linkedin-48.png';

// import './App.css';

// function Home() {
//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100%',
//       padding: '2rem',
//       gap: '3rem',
//       flexWrap: 'wrap',
//       color: 'white',
//     }}>
//       {/* Left-falling Icons */}
//       <div className="falling-icons">
//         <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
//           <img src={githubIcon} alt="GitHub" className="icon-drop" />
//         </a>
//         <a href="mailto:your.email@example.com">
//           <img src={gmailIcon} alt="Gmail" className="icon-drop" />
//         </a>
//         <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
//           <img src={linkedinIcon} alt="LinkedIn" className="icon-drop" />
//         </a>
//       </div>

//       {/* Text Section */}
//       <div className="home-text" style={{ maxWidth: '500px' }}>
//         <h2 style={{ marginBottom: '0.5rem' }}>Hello, It's Me</h2>
//         <h1 style={{ fontSize: '3rem', margin: '0.5rem 0', fontWeight: 'bold' }}>Manya Chandra</h1>
//         <h3 style={{ marginBottom: '1rem' }}>
//           And I'm a <span style={{ color: '#00d8ff' }}>Full Stack Developer</span>
//         </h3>
//         <p style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
//           "I am a web designer and a machine learning enthusiast."
//         </p>
//       </div>

//       {/* Image Section */}
//       <div className="home-image">
//         <img
//           src={profileImage}
//           alt="Profile"
//           style={{
//             width: '230px',
//             height: '230px',
//             objectFit: 'cover',
//             borderRadius: '50%',
//             border: '4px solid white',
//             boxShadow: '0 0 25px #00f0ff, 0 0 45px #ff00f7',
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// function Contact() {
//   return (
//     <div>
//       <h2>Contact Me</h2>
//       <p>Email: your.email@example.com</p>
//     </div>
//   );
// }

// function About() {
//   return <h2>About Me</h2>;
// }

// function Projects() {
//   return <h2>My Projects</h2>;
// }

// function Skills() {
//   return <h2>My Skills</h2>;
// }

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         {/* Background Video */}
//         <video className="background-video" autoPlay loop muted>
//           <source src={futuristicVideo} type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>

// //         {/* Navigation */}
// //         <nav className="navbar">
// //           <Link to="/home">Home</Link>
// //           <Link to="/about">About</Link>
// //           <Link to="/projects">Projects</Link>
// //           <Link to="/skills">Skills</Link>
// //           <Link to="/contact">Contact</Link>
// //         </nav>

// //         {/* Page Content */}
// //         <div className="content">
// //           <Routes>
// //             <Route path="/" element={<Navigate to="/home" />} />
// //             <Route path="/home" element={<Home />} />
// //             <Route path="/about" element={<About />} />
// //             <Route path="/projects" element={<Projects />} />
// //             <Route path="/skills" element={<Skills />} />
// //             <Route path="/contact" element={<Contact />} />
// //           </Routes>
// //         </div>
// //       </div>
// //     </Router>
//   );
// }

// export default App;

// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
// // import futuristicVideo from './assests/mixkit-animation-of-futuristic-devices-99786-hd-ready.mp4';
// // import profileImage from './assests/Portfoliopic.jpg';
// // import githubIcon from './assests/icons8-github-50.png';
// // import gmailIcon from './assests/icons8-gmail-48.png';
// // import linkedinIcon from './assests/icons8-linkedin-48.png';

// // import './App.css';

// // function Home() {
// //   return (
// //     <div className="home-wrapper">
// //       {/* Text Section */}
// //       <div className="home-text">
// //         <h2>Hello, It's Me</h2>
// //         <h1>Manya Chandra</h1>
// //         <h3>And I'm a <span className="highlight">Full Stack Developer</span></h3>
// //         <p>"I am a web designer and a machine learning enthusiast."</p>

// //         {/* Falling Icons */}
// //         <div className="icon-container">
// //           <a href="https://github.com/Manyachandra" target="_blank" rel="noopener noreferrer">

// //             <img src={githubIcon} alt="GitHub" className="falling-icon" />
// //           </a>
// //           <a href="mailto:\emaila">
// //             <img src={gmailIcon} alt="Gmail" className="falling-icon" />
// //           </a>
// //           <a href="https://www.linkedin.com/in/manyachandra8/" target="_blank" rel="noopener noreferrer">
// //             <img src={linkedinIcon} alt="LinkedIn" className="falling-icon" />
// //           </a>
// //         </div>
// //       </div>

// //       {/* Image Section */}
// //       <div className="home-image">
// //         <img
// //           src={profileImage}
// //           alt="Profile"
// //           className="profile-pic"
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // function Contact() {
// //   return (
// //     <div>
// //       <h2>Contact Me</h2>
// //       <p>Email: your.email@example.com</p>
// //     </div>
// //   );
// // }

// // function About() {
// //   return <h2>About Me</h2>;
// // }

// // function Projects() {
// //   return <h2>My Projects</h2>;
// // }

// // function Skills() {
// //   return <h2>My Skills</h2>;
// // }

// // function App() {
// //   return (
// //     <Router>
// //       <div className="app-container">
// //         {/* Background Video */}
// //         <video className="background-video" autoPlay loop muted>
// //           <source src={futuristicVideo} type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>

// //         {/* Navigation */}
// //         <nav className="navbar">
// //           <Link to="/home">Home</Link>
// //           <Link to="/about">About</Link>
// //           <Link to="/projects">Projects</Link>
// //           <Link to="/skills">Skills</Link>
// //           <Link to="/contact">Contact</Link>
// //         </nav>

// //         {/* Page Content */}
// //         <div className="content">
// //           <Routes>
// //             <Route path="/" element={<Navigate to="/home" />} />
// //             <Route path="/home" element={<Home />} />
// //             <Route path="/about" element={<About />} />
// //             <Route path="/projects" element={<Projects />} />
// //             <Route path="/skills" element={<Skills />} />
// //             <Route path="/contact" element={<Contact />} />
// //           </Routes>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
// import futuristicVideo from './assets/mixkit-animation-of-futuristic-devices-99786-hd-ready.mp4';
// import profileImage from './assets/Portfoliopic.jpg';
// import githubIcon from './assets/icons8-github-50.png';
// import gmailIcon from './assets/icons8-gmail-48.png';
// import linkedinIcon from './assets/icons8-linkedin-48.png';

// import './App.css';

// function Home() {
//   return (
//     <div className="home-wrapper">
//       <div className="home-text">
//         <h2>Hello, It's Me</h2>
//         <h1>Manya Chandra</h1>
//         <h3>And I'm a <span className="highlight">Full Stack Developer</span></h3>
//         <p>"I am a web designer and a machine learning enthusiast."</p>

//         <div className="icon-container">
//           <a href="https://github.com/Manyachandra" target="_blank" rel="noopener noreferrer">
//             <img src={githubIcon} alt="GitHub" className="falling-icon" />
//           </a>
//           <a href="mailto:your.email@example.com">
//             <img src={gmailIcon} alt="Gmail" className="falling-icon" />
//           </a>
//           <a href="https://www.linkedin.com/in/manyachandra8/" target="_blank" rel="noopener noreferrer">
//             <img src={linkedinIcon} alt="LinkedIn" className="falling-icon" />
//           </a>
//         </div>
//       </div>

//       <div className="home-image">
//         <img src={profileImage} alt="Profile" className="profile-pic" />
//       </div>
//     </div>
//   );
// }

// function Contact() {
//   return (
//     <div>
//       <h2>Contact Me</h2>
//       <p>Email: your.email@example.com</p>
//     </div>
//   );
// }

// function About() {
//   return <h2>About Me</h2>;
// }

// function Projects() {
//   return <h2>My Projects</h2>;
// }

// function Skills() {
//   return <h2>My Skills</h2>;
// }

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         {/* Background Video */}
//         <video className="background-video" autoPlay loop muted playsInline>
//           <source src={futuristicVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Navigation */}
//         <nav className="navbar">
//           <Link to="/home">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/projects">Projects</Link>
//           <Link to="/skills">Skills</Link>
//           <Link to="/contact">Contact</Link>
//         </nav>

//         {/* Page Content */}
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Navigate to="/home" />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.js


// src/App.js


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import futuristicVideo from './assests/mixkit-animation-of-futuristic-devices-99786-hd-ready.mp4';
import profileImage from './assests/Portfoliopic.jpg';
import githubIcon from './assests/icons8-github-50.png';
import gmailIcon from './assests/icons8-gmail-48.png';
import linkedinIcon from './assests/icons8-linkedin-48.png';

import './App.css';
import Contact from './pages/contact';
import TechSkills from './pages/TechSkills';
import ProjectCard from './pages/ProjectCard';
import Experience from './pages/Experience';
import Chatbot from './pages/Chatbot'; // ✅ Add this line

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-text">
        <h2>Hello, It's Me</h2>
        <h1>Manya Chandra</h1>
        <h3>And I'm a <span className="highlight">Full Stack Developer</span></h3>
        <p>"I am a web designer and a machine learning enthusiast."</p>
        <div className="icon-container">
          <a href="https://github.com/Manyachandra" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="falling-icon" />
          </a>
          <a href="mailto:your.email@example.com">
            <img src={gmailIcon} alt="Gmail" className="falling-icon" />
          </a>
          <a href="https://www.linkedin.com/in/manyachandra8/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="falling-icon" />
          </a>
        </div>
      </div>
      <div className="home-image">
        <img src={profileImage} alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About <span className="highlight">ME.</span></h2>
        <p>
          I'm a final year student at NIT Patna pursuing Computer Science and Engineering.
          I am a full-stack web developer with expertise in frameworks like React and Node.js.
          I am also a ML enthusiast. Let's work together to solve some real-world problems!
        </p>
        <div className="cards">
          <div className="card"><h3>Web Developer</h3></div>
          <div className="card"><h3>Frontend Developer</h3></div>
          <div className="card"><h3>Backend Developer</h3></div>
          <div className="card"><h3>ML Enthusiast</h3></div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        <ProjectCard
          name="ClubHub"
          description="Created an official platform providing comprehensive information on upcoming, current, and past events organized by 10+ clubs of NIT Patna."
          github="https://github.com/Manyachandra/NITP-ClubHub"
        />
        <ProjectCard
          name="Travel Diaries"
          description="A web application for traveler and blogger content in 4 formats: text, audio, video, and pictures."
          github="https://github.com/Manyachandra/travelDiaries"
        />
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <video className="background-video" autoPlay loop muted>
          <source src={futuristicVideo} type="video/mp4" />
        </video>

        <nav className="navbar">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/TechSkills">TechSkills</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/TechSkills" element={<TechSkills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Chatbot /> {/* ✅ Chatbot added at bottom of layout */}
      </div>
    </Router>
  );
}

export default App;
