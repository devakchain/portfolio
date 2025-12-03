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
      "Smart task manager built with React. Includes drag & drop, persistent state and a clean, productivity-focused UI.",
    github: "https://github.com/devakchain/task-trek",
    demo: "https://task-trek102.netlify.app/",
    tags: ["React", "Drag & Drop", "LocalStorage", "Custom Hooks"],
  },
  {
    name: "ShopNext (E-commerce)",
    image: shopnext,
    description:
      "Full-stack MERN e-commerce platform with authentication, cart, filtering, protected routes and production deployment.",
    github: "https://github.com/devakchain/E-commerce-App-",
    demo: "https://shopecoomerce.netlify.app/",
    tags: ["MERN", "JWT Auth", "REST API", "Redux / State"],
  },
  {
    name: "Sam-Movie",
    image: pic2,
    description:
      "Interactive movie explorer with API integration, search, filtering, pagination and full dark mode experience.",
    github: "https://github.com/devakchain/sam-movie",
    demo: "https://sam-move.netlify.app/",
    tags: ["React", "API Integration", "Search & Filters", "Dark Mode"],
  },
  {
    name: "Crypto Dash",
    image: crypto,
    description:
      "Professional crypto dashboard using live CoinGecko data, interactive charts, search, sorting and responsive layout.",
    github: "https://github.com/devakchain/crypto-dash",
    demo: "https://crypto-dashbo.netlify.app/",
    tags: ["React", "Charts", "CoinGecko API", "Dashboard UI"],
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <p className="section-subtitle">
        A selection of production-ready projects showcasing my full-stack
        skills, modern UI and clean architecture.
      </p>

      <div className="cards-container">
        {projects.map((project, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              {/* FRONT SIDE */}
              <div className="flip-card-front">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <div className="project-title">{project.name}</div>
                <div className="hover-hint">View details</div>
              </div>

              {/* BACK SIDE */}
              <div className="flip-card-back">
                <div>
                  <div className="project-name">{project.name}</div>
                  <p>{project.description}</p>

                  {project.tags && project.tags.length > 0 && (
                    <div className="tags">
                      {project.tags.map((tag, i) => (
                        <span className="tag" key={i}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

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
