import React from "react";
import Hero from "../components/Hero";
// import "./Courses.css";

const courses = [
  {
    id: 1,
    title: "Website Design Training",
    desc: "Learn modern responsive website design with HTML, CSS, and JavaScript.",
    icon: "/images/web-design.png",
  },
  {
    id: 2,
    title: "Frontend Development",
    desc: "Master React.js, Bootstrap, and frameworks for building interactive UIs.",
    icon: "/images/frontend.png",
  },
  {
    id: 3,
    title: "Backend Development",
    desc: "Get hands-on with Python, Django, and MySQL to build scalable apps.",
    icon: "/images/backend.png",
  },
  {
    id: 4,
    title: "SEO & Digital Marketing",
    desc: "Boost visibility and traffic with proven SEO and marketing strategies.",
    icon: "/images/seo.png",
  },
  {
    id: 5,
    title: "E-commerce Development",
    desc: "Build and manage online stores with WooCommerce & Shopify.",
    icon: "/images/ecommerce.png",
  },
  {
    id: 6,
    title: "Mobile App Development",
    desc: "Develop cross-platform apps using React Native and other tools.",
    icon: "/images/mobile.png",
  },
];

export default function Courses() {
  return (
    <div>
        <Hero/>
    <section className="courses-container">
      {/* Section Header */}
      <div className="kicker">
        <span className="kicker-line" />
        <span className="kicker-text">OUR COURSES</span>
        <span className="kicker-line" />
      </div>

      <h2 className="main-title">Learn With Us</h2>
      <div className="title-underline"><span className="dash" /></div>

      {/* Courses Grid */}
      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <div className="course-icon">
              <img src={course.icon} alt={course.title} />
            </div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-desc">{course.desc}</p>
            <div className="hover-overlay"></div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
