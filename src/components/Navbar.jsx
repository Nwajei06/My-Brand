import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-wrapper container d-flex justify-content-between align-items-center">
        
        {/* Logo */}
        <NavLink to="/" className="navbar-brand">
          <img src="/images/logo2.png" alt="Logo" className="logo-img" /> Chijo Concept
        </NavLink>
        
        {/* Navigation Menu */}
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto nav-box">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Our Services</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                  <li><a className="dropdown-item" href="#">Case Studies</a></li>
                  <li><a className="dropdown-item" href="#">FAQ</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/courses">Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        
      </div>
    </header>
  );
}

export default Navbar;
