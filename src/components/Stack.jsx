import React from "react";
import "./Stack.css";

const logos = [
    "/images/html.jpeg",
    //   "/images/css.jpeg",
    "/images/js.jpeg",
    "/images/react.jpeg",
    "/images/bootstrap.jpeg",
    "/images/django.jpeg",
    "/images/mysql.jpeg",
    "/images/python.jpeg",
];

const services = [
  { title: "Ecommerce Web Design", desc: "Beautiful, conversion-focused online stores.", icon: "/images/ecommerce-icon.png" },
  { title: "Website Development", desc: "Modern responsive websites tailored to your brand.", icon: "/images/mobile-icon.png" },
  { title: "SEO", desc: "Improve rankings and organic traffic.", icon: "/images/seo-icon.png" },
  { title: "Web Application Development", desc: "Native & cross-platform mobile apps.", icon: "/images/webapp-icon.png" },
  { title: "Website Maintenance", desc: "Updates, backups, security and uptime.", icon: "/images/maintenance-icon.png" },
  { title: "Web Design", desc: "Grow your audience and engagement.", icon: "/images/uiux-icon.png" },
];


export default function Stack() {
    return (
        <section className="stack-container">
            {/* ===== Tech Stack Section ===== */}
            <div className="stack-section">
                <div className="kicker">
                    <span className="kicker-line" />
                    <span className="kicker-text">TECHNOLOGIES WE USE</span>
                    <span className="kicker-line" />
                </div>

                <h2 className="main-title">Our Tech Stack</h2>
                <div className="title-underline"><span className="dash" /></div>

                <p className="stack-subtext">
                    We are highly proficient in HTML, CSS, JavaScript, Python, Django, Bootstrap, MySQL, ReactJS, WooCommerce, WordPress, Shopify and many other tools.
                </p>

                {/* logo slider - duplicate logos for smooth infinite loop */}
                <div className="logo-box">
                    <div className="logo-slider" aria-hidden="true">
  <div className="logo-track">
    {[...logos, ...logos].map((src, i) => (
      <div className="logo-item" key={i}>
        <img src={src} alt={`stack-logo-${i}`} />
      </div>
    ))}
  </div>
</div>

                </div>

            </div>

            {/* ===== Services Section ===== */}
            <div className="stack-section">
                <div className="kicker">
                    <span className="kicker-line" />
                    <span className="kicker-text">WHAT WE DO</span>
                    <span className="kicker-line" />
                </div>

                <h2 className="main-title">Website Development Services</h2>
                <div className="title-underline"><span className="dash" /></div>

               <div className="service-grid">
  {services.map((s, idx) => (
    <article key={idx} className="service-card">
      <div className="service-icon">
        <img src={s.icon} alt={s.title} />
      </div>
      <h3 className="service-title">{s.title}</h3>
      <p className="service-desc">{s.desc}</p>
      <div className="hover-overlay"></div>
    </article>
  ))}
</div>

            </div>
        </section>
    );
}
