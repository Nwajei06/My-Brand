import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import SubHero from "../components/SubHero";

export default function Contact() {
  return (
    <div>
        <SubHero/>
    <section className="contact-container">
      {/* Header */}
      <div className="kicker">
        <span className="kicker-line" />
        <span className="kicker-text">CONTACT US</span>
        <span className="kicker-line" />
      </div>

      <h2 className="main-title">Get In Touch</h2>
      <div className="title-underline"><span className="dash" /></div>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>124 Kiirikiri Apapa Lagos State</p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <p>+234 813 168 0922</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <p>nwajeijoshua55@gmail.com</p>
          </div>
          <div className="info-item">
            <FaWhatsapp className="info-icon" />
            <p>+234 813 168 0922</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
    </div>
  );
}
