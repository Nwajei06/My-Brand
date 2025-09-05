import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function SubHero() {
  return (
    <section className="subhero">
      <div className="subhero-overlay"></div>
      <div className="subhero-content">
        <motion.h1
          className="subhero-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Elevating Your Brand Further
        </motion.h1>

        <motion.p
          className="subhero-subtitle"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Stunning Designs, Powerful Web Apps, and Next-Level SEO — pushing your
          online presence even higher.
        </motion.p>

        <motion.div
          className="subhero-buttons"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="btn-primary"> <a href="https://wa.me/2348131680922" style={{textDecoration:"none", color:"white"}}> Get Started</a> </button>
          <button className="btn-secondary"> <NavLink to="/about" className="cha" style={{textDecoration:"none", color:"white"}}> Learn more</NavLink></button>
        </motion.div>
      </div>
    </section>
  );
}
