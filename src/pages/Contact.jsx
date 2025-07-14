import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p className="subtitle">Let’s connect and build something great!</p>

      <div className="contact-cards">
        <div className="contact-card">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <a href="mailto:shmoelyitzhak@gmail.com">shmoelyitzhak@gmail.com</a>
        </div>

        <div className="contact-card">
          <FaGithub className="icon" />
          <h3>GitHub</h3>
          <a
            href="https://github.com/devakchain"
            target="_blank"
            rel="noreferrer"
          >
            devakchain
          </a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="icon" />
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/shmuel-yitzhak-075289257/"
            target="_blank"
            rel="noreferrer"
          >
            Shmuel Yitzhak
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
