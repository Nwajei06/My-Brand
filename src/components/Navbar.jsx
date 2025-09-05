import React from "react";
import { NavLink } from "react-router-dom";
import { Offcanvas } from "bootstrap"; // Bootstrap JS API

function Navbar() {
  const handleNavClick = () => {
    const offcanvasElement = document.getElementById("mobileNav");
    if (offcanvasElement) {
      const offcanvasInstance = Offcanvas.getInstance(offcanvasElement);
      if (offcanvasInstance) offcanvasInstance.hide();
    }
  };

  return (
    <header className="navbar-container">
      <div className="navbar-wrapper container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand">
          <img src="/images/logo2.png" alt="Logo" className="logo-img" /> Chijo
          Concept
        </NavLink>

        {/* Mobile Hamburger */}
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

        {/* Offcanvas */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="mobileNav"
          aria-labelledby="mobileNavLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="mobileNavLabel">
              Menu
            </h5>
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
                <NavLink className="nav-link" to="/" end onClick={handleNavClick}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={handleNavClick}>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service" onClick={handleNavClick}>
                  Our Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/courses" onClick={handleNavClick}>
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={handleNavClick}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
