// src/pages/AboutMe.jsx
import React from "react";
import "../styles/AboutMe.scss";
import resumePDF from "../assets/cv.new.pdf";

function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="about-container no-image">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate Full Stack Developer with deep expertise in the
            MERN stack, frontend UI design, and scalable backend systems. I
            specialize in creating responsive, high-performance applications
            with a focus on clean architecture and smooth UX.
          </p>
          <p>
            I thrive in environments where innovation meets purpose. I’ve built
            a wide range of advanced projects and I'm continuously seeking new
            challenges that push my boundaries and drive impactful results.
          </p>
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
