// import React from 'react';
// import './TechSkills.css';

// // Correct icon imports from your assets folder
// import htmlIcon from '../assests/icons8-html-48.png';
// import cssIcon from '../assests/icons8-css-100.png';
// import jsIcon from '../assests/icons8-javascript-48.png';
// import reactIcon from '../assests/icons8-react-js-40.png';
// import nodeIcon from '../assests/icons8-node-js-50.png';
// import mongoIcon from '../assests/icons8-mongodb-48.png';
// import expressIcon from '../assests/icons8-express-js-50.png';
// import bootstrapIcon from '../assests/icons8-bootstrap-48.png';

// const techIcons = [
//   { src: htmlIcon, name: 'HTML' },
//   { src: cssIcon, name: 'CSS' },
//   { src: jsIcon, name: 'JavaScript' },
//   { src: bootstrapIcon, name: 'Bootstrap' },
//   { src: reactIcon, name: 'React' },
//   { src: nodeIcon, name: 'Node.js' },
//   { src: expressIcon, name: 'Express.js' },
//   { src: mongoIcon, name: 'MongoDB' },
// ];

// const TechSkills = () => {
//   return (
//     <div className="techskills-wrapper">
//       <h2 className="techskills-title">My Tech<span className="aqua-text"> Skills</span></h2>
//       <div className="techskills-icons">
//         {techIcons.map((icon, index) => (
//           <div
//             key={index}
//             className={`tech-icon ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
//           >
//             <img src={icon.src} alt={icon.name} />
//             <p className="stack-name">{icon.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TechSkills;
import React from 'react';
import './TechSkills.css';

// Icon imports
import htmlIcon from '../assests/icons8-html-48.png';
import cssIcon from '../assests/icons8-css-100.png';
import jsIcon from '../assests/icons8-javascript-48.png';
import reactIcon from '../assests/icons8-react-js-40.png';
import nodeIcon from '../assests/icons8-node-js-50.png';
import mongoIcon from '../assests/icons8-mongodb-48.png';
import expressIcon from '../assests/icons8-express-js-50.png';
import bootstrapIcon from '../assests/icons8-bootstrap-48.png';

const techIcons = [
  { src: htmlIcon, name: 'HTML' },
  { src: cssIcon, name: 'CSS' },
  { src: jsIcon, name: 'JavaScript' },
  { src: bootstrapIcon, name: 'Bootstrap' },
  { src: reactIcon, name: 'React' },
  { src: nodeIcon, name: 'Node.js' },
  { src: expressIcon, name: 'Express.js' },
  { src: mongoIcon, name: 'MongoDB' },
];

const additionalSkills = {
  Coursework: [
    'Data Structures and Algorithms',
    'Object Oriented Programming',
    'Operating System',
    'Artificial Intelligence',
    'Machine Learning',
  ],
  Languages: ['C++', 'Java', 'Python'],
  Tools: ['Git', 'GitHub Desktop', 'VS Code'],
  'Soft Skills': ['Communication', 'Teamwork', 'Leadership'],
};

const TechSkills = () => {
  return (
    <div className="techskills-wrapper">
      <h2 className="techskills-title">
        My Tech<span className="aqua-text"> Skills</span>
      </h2>

      {/* Tech Stack Icons */}
      <div className="techskills-icons">
        {techIcons.map((icon, index) => (
          <div
            key={index}
            className={`tech-icon ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
          >
            <img src={icon.src} alt={icon.name} />
            <p className="stack-name">{icon.name}</p>
          </div>
        ))}
      </div>

      {/* Skill Category Boxes */}
      <div className="techskills-boxes">
        {Object.entries(additionalSkills).map(([category, items], index) => (
          <div className="tech-box" key={index}>
            <h3>{category}</h3>
            <ul>
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
