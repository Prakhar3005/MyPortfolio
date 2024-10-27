import React from 'react';
import './Experience.css';

const ProjectsAndExperience = () => {
  const projects = [
    {
      title: 'Website for Flask IT Solutions Pvt. Ltd.',
      description: 'Developed during internship with React.js, Bootstrap integration.',
      image: '/assets/FitWeb.png' 
    },
    {
      title: 'Inventory Management Website',
      description: 'Frontend with product addition, stock updates, and payment integration.',
      image: '/assets/inventory.png' 
    },
    {
      title: 'NGO Swach Parivesh Foundation Website',
      description: 'Created using React.js with advanced JavaScript functionalities.',
      image: '/assets/turtlemint.png' 
    }
  ];

  const experience = [
    {
      role: 'React.js Developer Intern',
      company: 'Flask IT Solutions Pvt. Ltd.',
      duration: 'June 2024 - August 2024',
      image: '/assets/fitLogo.ico' 
    },
    {
      role: 'Frontend Developer',
      company: 'Freelance Project (NGO Website)',
      duration: 'April 2024 - May 2024',
      image: '/assets/NGO_Logo.png' 
    },
  ];

  return (
    <div id="projects-experience" className="projects-experience-page">
      <h2>My Projects & Experiences</h2>
      
      <div className="projects">
        <h3>Projects</h3>
        <div className="projects-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="project-content">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="experience">
        <h3>Experiences</h3>
        <div className="experience-cards">
          {experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <div
                className="experience-image"
                style={{ backgroundImage: `url(${exp.image})` }}
              ></div>
              <div className="experience-content">
                <h4>{exp.role}</h4>
                <p>{exp.company}</p>
                <span>{exp.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsAndExperience;
