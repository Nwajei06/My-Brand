import React, { useEffect, useRef, useState } from "react";
// import "./AboutSection.css";

const statCards = [
  { id: "award",   title: "Award Winning",  note: "Best Web Designers in Nigeria",   icon: "🏆" },
  { id: "clients", title: "500+ Clients",   note: "Satisfied customers nationwide",  icon: "👥" },
  { id: "cities",  title: "Lagos & Abuja",  note: "Offices in major cities",         icon: "📍" },
  { id: "support", title: "24/7 Support",   note: "Always here to help you",         icon: "⏰" },
];

const infoCards = [
  {
    id: "services",
    title: "Our Key Services",
    lines: [
      "✔ Web Development — custom websites tailored to your goals.",
      "✔ E-commerce Development — online stores that drive sales.",
      "✔ SEO — growth via world-class search optimization.",
    ],
  },
  {
    id: "mission",
    title: "Our Mission",
    lines: [
      "Help businesses build their brand through professional, results-driven websites.",
      "Create websites & software that match each client’s needs.",
    ],
  },
  {
    id: "vision",
    title: "Our Vision",
    lines: [
      "Be the go-to web designers in Nigeria for exceptional app solutions.",
      "Empower businesses across Africa with premium digital tools.",
    ],
  },
];

export default function AboutSection() {
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [activeStat, setActiveStat] = useState(null);
  const [activeInfo, setActiveInfo] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.2 }
    );
    if (wrapRef.current) obs.observe(wrapRef.current);
    return () => wrapRef.current && obs.unobserve(wrapRef.current);
  }, []);

  return (
    <section ref={wrapRef} className={`about-wrap ${inView ? "in-view" : ""}`}>
      
      {/* Big Intro Box */}
      <div className="intro-box">
        <h2 className="intro-title">Website Designer Nigeria</h2>
        <p>
          Website Designer Nigeria are the best web designers in Nigeria. We are passionate about helping businesses in the tech,
          finance, health, and corporate industries fully leverage the latest software technologies. 
          As a leading web design company in Lagos and Abuja, our team provides tailored solutions to meet your exact business needs.
        </p>
        <p>
          Additionally, we help you integrate the latest payment gateways enabling you to accept payments locally and internationally.
          This integration ensures smooth transactions for your customers no matter where they are located.
        </p>
      </div>

      {/* 4 Stat Boxes */}
      <div className="about-stats grid-reveal">
        {statCards.map((c) => (
          <div
            key={c.id}
            className={`card stat-card ${activeStat === c.id ? "active" : ""}`}
            onClick={() => setActiveStat(activeStat === c.id ? null : c.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              setActiveStat(activeStat === c.id ? null : c.id)
            }
          >
            <div className="icon">{c.icon}</div>
            <h4 className="card-title">{c.title}</h4>
            <p className="card-note">{c.note}</p>
          </div>
        ))}
      </div>

      {/* 3 Info Boxes */}
      <div className="about-info grid-reveal">
        {infoCards.map((c) => (
          <div
            key={c.id}
            className={`card info-card ${activeInfo === c.id ? "active" : ""}`}
            onClick={() => setActiveInfo(activeInfo === c.id ? null : c.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              setActiveInfo(activeInfo === c.id ? null : c.id)
            }
          >
            <h3 className="card-title accent">{c.title}</h3>
            <ul className="card-list">
              {c.lines.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
