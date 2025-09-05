import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import {  FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We create stunning, responsive websites and provide top-notch digital solutions
            to elevate your brand and business online.
          </p>
          <div className="social-icons">
            <NavLink to="https://x.com/Api_daddy001"><FaTwitter /></NavLink>
            <NavLink to="https://www.linkedin.com/in/joshua-nwajei-479262344/"><FaLinkedinIn /></NavLink>
            <NavLink to="https://wa.me/2348131680922" ><FaWhatsapp /></NavLink>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Know more</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section services">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#">Website Develpomennt</a></li>
            <li><a href="#">Ecommerce Development</a></li>
            <li><a href="#">Web Application development </a></li>
            <li><a href="#">Website Maintenance</a></li>
            <li><a href="#">SEO Optimization</a></li>
            
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h3>Email us</h3>
          <p>Subscribe to get the latest updates and offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Chijo Concept Elevating Your Brand</p>
      </div>
    </footer>
  );
}
