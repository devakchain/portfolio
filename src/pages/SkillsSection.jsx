import React from "react";
import "../styles/SkillsSection.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiSass,
} from "react-icons/si";

function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <h2>My Tech Stack</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <FaHtml5 /> <span>HTML5</span>
        </div>
        <div className="skill-card">
          <FaCss3Alt /> <span>CSS3</span>
        </div>
        <div className="skill-card">
          <FaJs /> <span>JavaScript</span>
        </div>
        <div className="skill-card">
          <SiTypescript /> <span>TypeScript</span>
        </div>
        <div className="skill-card">
          <FaReact /> <span>React</span>
        </div>
        <div className="skill-card">
          <SiRedux /> <span>Redux</span>
        </div>
        <div className="skill-card">
          <FaNodeJs /> <span>Node.js</span>
        </div>
        <div className="skill-card">
          <SiExpress /> <span>Express</span>
        </div>
        <div className="skill-card">
          <SiMongodb /> <span>MongoDB</span>
        </div>
        <div className="skill-card">
          <SiTailwindcss /> <span>Tailwind CSS</span>
        </div>
        <div className="skill-card">
          <SiBootstrap /> <span>Bootstrap</span>
        </div>
        <div className="skill-card">
          <SiSass /> <span>SASS</span>
        </div>
        <div className="skill-card">
          <FaGitAlt /> <span>Git</span>
        </div>
        <div className="skill-card">
          <FaDocker /> <span>Docker</span>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
