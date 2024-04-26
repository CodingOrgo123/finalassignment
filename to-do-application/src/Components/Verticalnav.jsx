import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/VNavbar.css';

const VNavbar = () => {
  return (
    <div className="sidenav">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default VNavbar;
