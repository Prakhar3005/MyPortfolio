import React from 'react';
import './Experience.css';

const ProjectsAndExperience = () => {
  const projects = [
    {
      title: 'Website for Flask IT Solutions Pvt. Ltd.',
      description: 'Developed during internship with React.js, Bootstrap integration and JavaScript.',
      image: '/assets/FitWeb.png',
      link: 'https://github.com/Prakhar3005/FIT-WEBSITE' 
    },
    {
      title: 'Inventory Management Website',
      description: 'Frontend with product addition, stock updates, and payment integration.',
      image: '/assets/inventory.png',
      link: 'https://github.com/Prakhar3005/InventoryManagement'
    },
    {
      title: 'Turtlemint Website Clone',
      description: 'Created using React.js with basic bootstrap and JavaScript functionalities.',
      image: '/assets/turtlemint.png',
      link: 'https://github.com/Prakhar3005/Turtlemint-Clone' 
    }
  ];

  const experience = [
    {
      role: 'React.js Developer Intern',
      company: 'Flask IT Solutions Pvt. Ltd.',
      duration: 'June 2024 - August 2024',
      image: '/assets/fitLogo.ico',
    },
    {
      role: 'Frontend Developer',
      company: 'Freelance Project (NGO Website)',
      duration: 'April 2024 - May 2024',
      image: '/assets/NGO_Logo.png',
    },
  ];

  return (
    <div id="projects-experience" className="projects-experience-page">
      <h2>My Projects & Experiences</h2>
      
      <div className="projects">
        <h3>Projects</h3>
        <div className="projects-cards">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="project-content">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="experience">
        <h3>Experiences</h3>
        <div className="experience-cards">
          {experience.map((exp, index) => (
            <a key={index} href={exp.link} target="_blank" rel="noopener noreferrer" className="experience-card">
              <div
                className="experience-image"
                style={{ backgroundImage: `url(${exp.image})` }}
              ></div>
              <div className="experience-content">
                <h4>{exp.role}</h4>
                <p>{exp.company}</p>
                <span>{exp.duration}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsAndExperience;
