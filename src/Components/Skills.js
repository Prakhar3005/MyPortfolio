import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML, CSS, JavaScript', image: '/assets/HTML_CSS_JS.png' },
    { name: 'TypeScript', image: '/assets/TypeScript.png' },
    { name: 'React.js (Hands-on experience)', image: '/assets/react.png' },
    { name: 'Bootstrap', image: '/assets/bootstrap.png' },
    { name: 'Responsive Web Design', image: '/assets/responsive.jpeg' },
    { name: 'Git & GitHub (Version Control)', image: '/assets/github.png' },
    { name: 'Data Structures & Algorithms', image: '/assets/DSA.webp' },
    { name: 'Problem-solving & Debugging', image: '/assets/debugging.jpeg' },
    { name: 'Basic SEO & SEM', image: '/assets/SEO_M.png' },
    { name: 'Mathematics Proficiency', image: '/assets/maths.jpeg' },
    { name: 'Team Collaboration', image: '/assets/teamwork.jpg' },
    { name: 'Communication & Time Management', image: '/assets/time.jpg' }
  ];

  return (
    <div id="skills" className="skillsPage">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ backgroundImage: `url(${skill.image})` }}
          >
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
