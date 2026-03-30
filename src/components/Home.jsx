import React, { useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";

import { Menu, X } from "lucide-react";
import profileImg from "../assets/profile.png";
import logo from "../assets/logo.png";
import P1 from "../assets/pro1.png";
import P2 from "../assets/pro2.png";
import P3 from "../assets/pro3.png";
import P4 from "../assets/pro4.png";
import P5 from "../assets/pro5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // path to your resume in public folder
    link.download = 'Daniel_Resume.pdf'; // filename for download
    link.click();
  };

  const caseStudies = [
  {
    id: 1,
    name: "dadicooks.ae",
    link: "https://www.instagram.com/dadi_cooks.ae?igsh=OWducGRmeDhiZHVq",
    image: P1,
    type: "Catering Brand / Personal Brand",
    objective:
      "Build brand presence for Maroon Door and generate inbound orders",
    execution: [
      "Story-driven food content",
      "Entertainment + value + emotion",
      "Strong central character",
      "Consistent storytelling",
    ],
    results: [
      "4.5M+ views (first video)",
      "Multiple viral videos",
      "Inbound catering orders",
    ],
  },
  {
    id: 2,
    name: "wallstreetjr_1",
    link: "https://www.instagram.com/wallstreetjr_1?igsh=bGR6MTZhcGpqdTJx",
    image: P2,
    type: "Investment Educator",
    objective:
      "Build a strong personal brand to drive awareness and distribution for investment services and offerings.",
    execution: [
      "High-retention content",
      "Fast-paced storytelling",
      "Engagement-focused",
      "Repeatable framework",
    ],
    results: [
      "0 → 11K followers",
      "10+ videos >100K views",
      "Inbound DMs for courses",
    ],
  },
  {
    id: 3,
    name: "sunilkumar_assethomes",
    link: "https://www.instagram.com/sunilkumar_assethomes?igsh=NmJ3NWRwZGE0N2Nq",
    image: P3,
    type: "Real Estate Founder",
    objective: "Build founder authority and visibility",
    execution: [
      "Story-driven content based on founder strength",
      "Conversational format",
      "Guided freestyle delivery",
      "Consistent content production",
      
    ],
    results: [
      "100+ videos",
      "5–10 videos crossed 1M+",
      "Increased authority",
    ],
  },
  {
    id: 4,
    name: "Honest Bowl",
    link: "https://www.instagram.com/honest.bowl?igsh=dmJkc2JzN2pkeTBm",
    image: P4,
    type: "Food Brand",
    objective: "Build brand awareness and distribution on social media for the food brand.",
    execution: [
      "Street interview format",
      "Relatable questions",
      "Focus on real human experiences",
      "Emotion-driven storytelling",
    ],
    results: [
      "10+ videos with 1M+ views",
      "70K followers",
      "High engagement",
    ],
  },
  {
    id: 5,
    name: "praveen.prowim",
    link: "https://www.instagram.com/praveen.prowin?igsh=MW14a29sbWJhaGY0bA==",
    image: P5,
    type: "Real Estate Brand",
    objective: "Build brand awareness and distribution on social media for a real estate company.",
    execution: [
      "High-energy content",
      "Aggressive sales format",
      "Fast-paced editing",
    ],
    results: [
      "0 → 10K followers",
      "Consistent reach",
      "Investment enquiries",
    ],
  },
];
const [active, setActive] = useState(null);



  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => scrollToSection("hero")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero-bg"></div>

        <div className="hero-content">
          <motion.div
            className="hero-left"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            
            <img src={profileImg} alt="profile" className="profile-img" />
          </motion.div>

          <motion.div
            className="hero-right"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1><br />DANIEL<br />STEPHEN</h1>
            <p className="designation">Organic Social Media Strategist</p>

            <div className="hero-buttons">
              
              <div>
      {/* --- 2. Place your button inside the JSX where you want it to render --- */}
      <button className="btn" onClick={downloadResume}>
              Download Resume
            </button>
          </div>
              <button className="btn-outline" onClick={() => scrollToSection("contact")}>
                Contact Me ....
                
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
  

  <motion.p
    className="about-subtitle"
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
  >
    I help Founders and Brands grab attention and build authority on social media using structured short-form content..
  </motion.p>

  <div className="about-grid">
    {[
      {
        title: "What I Do",
        desc: "I create strategically planned short-form videos, backed by research, that grab attention and retention on social media.",
        points: [
          
        ],
      },
      {
        title: "Who I Help",
        desc: "I help founders and buisiness brands get attention, build authority, and increase brand visibility on social media through customized content strategies based on their goals.",
        points: [
          
        ],
      },
      {
        title: "How I Work",
        desc: "",
        points: [
          "Research & strategy developement",
          "Concept & Framework creation",
          "Pre-production planning",
          "Shoot direction with videographer",
          "Editing direction with editor",
          "Content publishing",
          "Performance analysis and improvement",
        ],
      },
    ].map((card, i) => (
      <motion.div
        className="about-card"
        key={i}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: i * 0.2 }}
        whileHover={{ y: -10, scale: 1.03 }}
      >
        <h3>{card.title}</h3>
        <p>{card.desc}</p>

        <ul>
          {card.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
</section>

      <section id="stats" className="stats-container">
  <motion.div
    className="stats-box"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 120 }}
  >
    {[
      { value: "50+", label: "Clients" },
      { value: "50M+", label: "Views" },
      { value: "2M+", label: "Followers" },
      { value: "3000+", label: "Videos" },
    ].map((stat, i) => (
      <motion.div
        className="stat-item"
        key={i}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, type: "spring", stiffness: 120 }}
      >
        <h2>{stat.value}</h2>
        <p>{stat.label}</p>
      </motion.div>
    ))}
  </motion.div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Proof, Not Promises
      </motion.h2>
      <motion.p className="abc" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Real results from real clients.
      </motion.p>

      <div className="project-grid">
        {caseStudies.map((project) => (
          <div
            key={project.id}
            className={`project-card ${
              active === project.id ? "active" : ""
            }`}
          >
            {/* HEADER */}
            <div className="card-header">
              <img src={project.image} alt="" />
              <div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
                <p>{project.type}</p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="card-body">
              <h4>Objective</h4>
              <p>{project.objective}</p>

              <h4>Execution</h4>
              <ul>
                {project.execution.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h4>Results</h4>
              <ul>
                {project.results.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* EXPAND BUTTON */}
            <div
              className="expand-btn"
              onClick={() =>
                setActive(active === project.id ? null : project.id)
              }
            >
              →
            </div>
          </div>
        ))}
      </div>
    </section>
      <section id="contact"  className="contact-premium">
      <h2>Let's make your brands stand out</h2>
      <p>Reach out and let’s discuss your brand.</p>

      <div className="contact-list">
        <div className="contact-card">
          <FontAwesomeIcon icon={faPhone} />
          <span>+91 9074069437</span>
        </div>

        <a href="https://wa.me/918301946350" target="_blank" rel="noreferrer" className="contact-card">
          <FontAwesomeIcon icon={faWhatsapp} />
          <span>WhatsApp</span>
        </a>

        <div className="contact-card">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>danielstephenwork@gmail.com</span>
        </div>

        <a href="https://www.linkedin.com/in/daniellstephen/" target="_blank" rel="noreferrer" className="contact-card">
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918301946350"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>

      <div className="contact-footer">
        <p>© 2026 Daniel Stephen. All rights reserved.</p>
      </div>
    </section>

    </div>
  );
};

export default Home;