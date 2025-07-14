import React, { useState } from "react";
import "../styles/Navbar.scss";
import Logo from "./Logo";

function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`logo ${darkMode ? "dark" : "light"}`}>
          <Logo />
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a> {/* ✅ נוסף */}
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <div className="theme-toggle" onClick={toggleTheme}>
              <div className={`toggle-thumb ${darkMode ? "dark" : "light"}`} />
            </div>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
        <div
          className="theme-toggle"
          onClick={() => {
            toggleTheme();
            closeMenu();
          }}
        >
          <div className={`toggle-thumb ${darkMode ? "dark" : "light"}`} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
