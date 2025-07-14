// src/pages/Welcome.jsx
import React from "react";
import "../styles/Welcome.scss";
import me from "../assets/me.jpeg";

function Welcome() {
  return (
    <section className="welcome-section" id="home">
      <div className="welcome-content">
        <div className="text">
          <h1>
            Hi, I’m <span>Shmuel Yitzhak</span>
          </h1>
          <h2>MERN Stack Developer</h2>
          <p>
            Passionate about building modern, scalable web applications with a
            focus on performance and clean code.
          </p>
          <a href="#projects" className="cta-button">
            Explore Projects
          </a>
        </div>
        <div className="image">
          <img src={me} alt="Shmuel Yitzhak" />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
