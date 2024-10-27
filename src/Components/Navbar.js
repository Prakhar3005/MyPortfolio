import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <h1 className="logo">Nice to meet you ;)</h1>
      <div className="nav-links">
        <li><Link to="/">Profile</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/experience">Work & Experience</Link></li>
      </div>
    </div>
  );
}

export default Navbar;
