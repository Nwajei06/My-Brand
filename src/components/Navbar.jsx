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
                <NavLink className="nav-link" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">Our Services</NavLink>
              </li>
              <li className="nav-item dropdown">
  <NavLink
    className="nav-link dropdown-toggle"
    to="#"
    id="resourcesDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Resources
  </NavLink>
  <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
    <li><NavLink className="dropdown-item" to="/blog">Blog</NavLink></li>
    <li><NavLink className="dropdown-item" to="/case-studies">Case Studies</NavLink></li>
    <li><NavLink className="dropdown-item" to="/faq">FAQ</NavLink></li>
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
