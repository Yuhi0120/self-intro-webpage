import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <nav>
        <ul className="nav-head">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/background">Background Info</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <div id="about-me">
          <h1>About Me</h1>
          <h2>Welcome to my personal webpage!</h2>
          <h2>
            I'm <strong>Yuhi Chiba</strong>, a passionate student of 
            <strong> Computer Science and Computer Engineering</strong> at <strong>Waseda University</strong> in Japan. 
            Currently, I am an exchange student at the <strong>University of Texas at Austin</strong>, 
            where I am gaining new perspectives and expanding my academic and cultural horizons (until May 2025).
          </h2>
          <h2>
            My primary goal is to leverage <strong>computer science technologies, particularly artificial intelligence</strong>, 
            to make a positive impact on medicine. I am deeply interested in how AI can advance healthcare, including areas 
            like <strong>drug discovery</strong>, <strong>medical diagnostics</strong>, and <strong>surgical optimization</strong>. 
            In addition to my passion for AI, I am also drawn to <strong>backend development</strong> and 
            <strong>hardware engineering</strong>, appreciating the synergy between software and hardware systems.
          </h2>
          <h2>
            Throughout my university experience, I have built a solid foundation in computer science and engineering, 
            acquiring practical programming skills in <strong>C</strong>, <strong>Java</strong>, <strong>Python</strong>, 
            <strong>HTML</strong>, <strong>CSS</strong>, and <strong>React</strong> through class projects and hands-on assignments. 
            These experiences have honed my ability to develop efficient and reliable applications, both on the software and hardware sides.
          </h2>
          <h2>
            Besides technical expertise, I have gained a strong understanding of <strong>mathematics</strong>, <strong>physics</strong>, 
            and <strong>chemistry</strong>, enabling me to tutor fellow students and help them excel in these subjects. 
            Additionally, I enjoy solving algorithmic challenges on <strong>LeetCode</strong> to strengthen my problem-solving abilities 
            and continuously grow as a developer.
          </h2>
          <h2>
            Thank you for visiting my webpage! Feel free to connect with me to discuss ideas, collaborations, or just to say hi!
          </h2>
        </div>
        <div id="profile">
          <img src="myface1-1.jpg" className="profile-img" alt="My Face" />
          <a>Yuhi Chiba</a>
          <b>Waseda University</b>
          <b>CS and Computer Engineering major</b>
          <b>gmail : yuhi.142857@gmail.com</b>
          <div className="icon">
            <a href="https://github.com/Yuhi0120">
              <img src="github-mark.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/yuhi-chiba-8ab579346?trk=people-guest_people_search-card">
              <img src="LI-In-Bug.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
