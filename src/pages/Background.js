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
        <p><strong>School Name:</strong> Nishi Metropolitan High School</p>
        <p>
          <strong>Club Activities:</strong> Soft tennis, Physics, Founder of Pokémon Club (which was broadcast on TV!).
        </p>
        <p>
          <strong>Extracurricular Activities:</strong> I was chosen as a member of an exchange program that would visit MIT &amp; Harvard. 
          Although canceled due to COVID‐19, I was trained in presentation, communication, and other skills.
        </p>
      </ToggleSection>

      <ToggleSection title="University">
        <p><strong>School Name:</strong> Waseda University (Computer Science &amp; Engineering major)</p>
        <p>
          <strong>Relevant Classes:</strong> Linear Algebra, Advanced Linear Algebra, Mathematical Analysis, Physics, Chemistry, 
          English, Modeling, Statistics, Vector Analysis, C, Java, Python, Information Math, Algorithm, Data Structure
        </p>
        <p>
          <strong>Study Abroad:</strong> From August 2024 to June 2025, I studied abroad at the University of Texas at Austin as 
          an ECE (Electrical and Computer Engineering) major exchange student, taking OS, Programming Analysis, Networking, Software, and Computer Architecture.
        </p>
      </ToggleSection>
    </div>
  );
};

const JobBackground = () => {
  return (
    <div>
      <h1>Job Background</h1>
      <ToggleSection title="Tutoring Experience">
        <p>
          I worked at a high school as a cram school teacher, instructing students in math, physics, chemistry, English, and Japanese.
        </p>
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
