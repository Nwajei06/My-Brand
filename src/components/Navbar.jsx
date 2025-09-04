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

        {/* Desktop Nav (visible only on lg+) */}
        <nav className="navbar d-none d-lg-block">
          <ul className="navbar-nav nav-box d-flex flex-row">
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
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="resourcesDropdownDesktop"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdownDesktop">
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
        </nav>

        {/* Mobile Hamburger (only visible on small screens) */}
     <nav className="navbar navbar-light d-lg-none">
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#mobileNav"
    aria-controls="mobileNav"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
</nav>


        {/* Offcanvas Menu for Mobile */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="mobileNav"
          aria-labelledby="mobileNavLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="mobileNavLabel">Menu</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav nav-box">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end data-bs-dismiss="offcanvas">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" data-bs-dismiss="offcanvas">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service" data-bs-dismiss="offcanvas">Our Services</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="resourcesDropdownMobile"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu" aria-labelledby="resourcesDropdownMobile">
                  <li><NavLink className="dropdown-item" to="/blog" data-bs-dismiss="offcanvas">Blog</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/case-studies" data-bs-dismiss="offcanvas">Case Studies</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/faq" data-bs-dismiss="offcanvas">FAQ</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/courses" data-bs-dismiss="offcanvas">Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" data-bs-dismiss="offcanvas">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
