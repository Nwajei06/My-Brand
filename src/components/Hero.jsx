import React from 'react';
import { motion } from 'framer-motion';
// import "./Hero.css";

function Hero() {
  return (
    <div className="heroimage">
      {/* Bubble Animation */}
      <div className="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Hero Text */}
      <motion.span
        className="ele"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Elevating Your Brand
      </motion.span>

      <motion.span
        className="subele"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Elevate Your Online Presence with Stunning Designs, <br />
        Powerful Web Apps, and Top-Tier SEO!
      </motion.span>

      <motion.span
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <br /><br /><br />
        <button className="linksbut">
          <i className="fas fa-envelope"></i> Email
        </button>
        <button className="linksbut">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </button>
      </motion.span>
    </div>
  );
}

export default Hero;
