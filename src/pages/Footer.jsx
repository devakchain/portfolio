import React from "react";
import "../styles/Footer.scss";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer({ darkMode }) {
  return (
    <footer className={`footer ${darkMode ? "dark" : "light"}`}>
      <div className="footer-container">
        <div className="footer-left">
          <h3>Shmuel Yitzhak</h3>
          <p>Full Stack Developer | MERN | JS | React | Node</p>
        </div>

        <div className="footer-middle">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Connect with me</h4>
          <div className="social-icons">
            <a
              href="https://github.com/devakchain"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shmuel-yitzhak-075289257/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:shmoelyitzhak@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Shmuel Yitzhak. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
