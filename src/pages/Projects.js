import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Back-Pro.css';

/* For Navigation Var */
const Navbar = () => {
  return (
    <nav>
      <ul className="nav-head">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/background">Background Info</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
};

/* For the toggle */
const ToggleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toggle-section-pro">
      <h2 onClick={handleClick} className={isOpen ? "open" : ""}>
        {title} {isOpen ? '▲' : '▼'}
      </h2>
      {isOpen && <div className="toggle-content-pro">{children}</div>}
    </div>
  );
};

/* Functon for the Personal Project section */
const PersonalProject = () => {
  return (
    <div>
      <ToggleSection title="Personal Projects">
        <strong>Self-introduction WebPage Development (2025 Mar - 2025 April)</strong>
        <p>
          I was working on making this webpage by implementing the skills I learned in the Web App Development class at UT Austin.
        </p>
      </ToggleSection>
    </div>
  );
};

/* Function for Research Project section */
const ResearchProject = () => {
  return (
    <div>
      <ToggleSection title="Research Project">
        <p>Coming soon...</p>
      </ToggleSection>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <PersonalProject />
        <ResearchProject />
      </div>
    </div>
  );
};

export default Projects;
