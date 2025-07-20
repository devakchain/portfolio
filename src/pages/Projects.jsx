import React from "react";
import "../styles/Projects.scss";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import pic1 from "../assets/pic1.jpg";
import shopnext from "../assets/shopnext.webp";
import pic2 from "../assets/pic2.png";
import crypto from "../assets/crypto.png";

const projects = [
  {
    name: "Task-Trek",
    image: pic1,
    description:
      "Smart task manager built with React. Includes drag & drop, localStorage, and modern UI.",
    github: "https://github.com/devakchain/task-trek",
    demo: "https://task-trek102.netlify.app/",
  },
  {
    name: "ShopNext (E-commerce)",
    image: shopnext,
    description:
      "Full MERN e-commerce platform with auth, cart, filtering, and deployment on Netlify/Render.",
    github: "https://github.com/devakchain/E-commerce-App-",
    demo: "https://shopecoomerce.netlify.app/",
  },
  {
    name: "Sam-Movie",
    image: pic2,
    description:
      "Interactive movie app with API fetching, search, filters, pagination and dark mode.",
    github: "https://github.com/devakchain/sam-movie",
    demo: "https://sam-move.netlify.app/",
  },
  {
    name: "Crypto Dash",
    image: crypto,
    description:
      "Professional crypto dashboard with real-time CoinGecko data, interactive charts, search, sorting & full responsiveness.",
    github: "https://github.com/devakchain/crypto-dash",
    demo: "https://crypto-dashbo.netlify.app/",
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="cards-container">
        {projects.map((project, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <div className="hover-hint">↻ Hover to flip</div>
              </div>
              <div className="flip-card-back">
                <p>{project.description}</p>
                <div className="btns">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> &nbsp;Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub /> &nbsp;GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
