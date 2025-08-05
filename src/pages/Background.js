import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Back-Pro.css';

/* For Navigation */
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

/* For toggle */
const ToggleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toggle-section">
      <h2 onClick={handleClick} className={isOpen ? "open" : ""}>
        {title} {isOpen ? '▲' : '▼'}
      </h2>
      {isOpen && <div className="toggle-content">{children}</div>}
    </div>
  );
};

const EducationalBackground = () => {
  return (
    <div>
      <h1>Educational Background</h1>
      <ToggleSection title="High School">
        <p><strong>School Name:</strong> Nishi Metropolitan High School (April 2019 - March 2022)</p>
        <p>
          <strong>Club Activities:</strong> Soft tennis, Physics, Founder of Pokémon Club (which was broadcast on TV).
        </p>
        <p>
          <strong>Extracurricular Activities:</strong> I was chosen as a member of an exchange program that would visit MIT &amp; Harvard.
          Although canceled due to COVID‐19, I was trained in presentation, communication, and other skills.
        </p>

      </ToggleSection>

      <ToggleSection title="University">
        <p><strong>School Name:</strong> Waseda University (April 2023 - March 2027) </p>
        <p><strong>Major:</strong> Computer Science &amp; Engineering</p>
        <p><strong>GPA: </strong>3.41 / 4.0 (So far)</p>
        <p>
          <strong>General Education Courses:</strong> Linear Algebra, Advanced Linear Algebra, Mathematical Analysis, Physics, Chemistory, Engineering Modeling,
          Probability and Statistics, Vector Analysis
        </p>
        <p>
          <strong>Major Courses:</strong> C, Java, Python, Information Math, Algorithm,  Information Theory, Data Structure, Circuit Theory, Logical Circuit
        </p>
        <p><strong>Circle Activity:</strong> Squash, Tennis</p>

      </ToggleSection>

      <ToggleSection title="Studying Abroad">
        <p><strong>School Name:</strong> University of Texas at Austin (August 2024 - Current) </p>
        <p><strong>Major:</strong> Electrical and Computer Engineering</p>
        <p><strong>Courses:</strong> Computer Archtecture, Software Engineering and Design, Networking, Programming Analysis, Operating System</p>
      </ToggleSection>
    </div>
  );
};

const JobBackground = () => {
  return (
    <div>
      <h1>Job Background</h1>
      <ToggleSection title="Backend Engineer Internship">
        <p><strong>Place:</strong>Ollo Inc. (June 2025 - Present)</p>
        <p><strong>Responsibilities:</strong></p>
        <ul>
          <li>Collaborated with my mentor and CEO to develop and improve product</li>
          <li>Designed and implemented RESTful APIs using FastAPI</li>
          <li>Set up and managed Docker and UV CLI based development environments</li>
          <li>Integrated AWS services for scalable backend</li>
        </ul>
        <p><strong>Skills:</strong> FastAPI, Docker, AWS, UV CLI, Poetry</p>
      </ToggleSection>
    </div>
  );
};

const Background = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <EducationalBackground />
        <JobBackground />
      </div>
    </div>
  );
};

export default Background;

