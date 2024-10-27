// src/components/Profile.js
import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile-image'>
        <img src='/assets/resumeImage.jpg' alt='Profile' />
      </div>

      <div className='profile-info'>
        <h1>Prakhar Khandelwal</h1>
        <h4>React.JS Developer | Learner | Tech Enthusiast</h4>

        <p className='description'>
          Highly motivated and detail-oriented front-end website developer with
          a strong foundation in HTML, CSS, JavaScript, TypeScript, React.js,
          and Bootstrap and having practical hands on experience in the same.
          Eager to utilize skills and learn more from experienced professionals
          in a dynamic and creative environment.{' '}
        </p>

        <div className='profile-icons'>
          <a href='tel:+919001879305' target='_blank' rel='noopener noreferrer'>
            <FaPhoneAlt />
          </a>
          <a
            href='mailto:prakhar.khandelwal181@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelope />
          </a>
          <a
            href='https://www.linkedin.com/in/prakhar-khandelwal-539ab325a'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://github.com/Prakhar3005'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        </div>

        <div className="education">
        <p>
          <strong>Education:</strong>
          <ul>
            <li>Class X - St. Anselm's North City School, Jaipur (88%)</li>
            <li>Class XII - St. Anselm's North City School, Jaipur (86% PCM)</li>
            <li>B.C.A (1st Year) - J.K Lakshmipat
            University, Jaipur (9.2 C.G.P.A)</li>
            <li>B.C.A (2nd Year) - J.K Lakshmipat
            University, Jaipur (9.4 C.G.P.A)</li>
          </ul>
           
        </p>
        </div>

        <div className="interest">
        <p>
          <strong>Interests:</strong> Web Development, DSA, Data Science,
          Business Analytics, Mathematics, Digital Marketing, Network Building
          and Communication
        </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
