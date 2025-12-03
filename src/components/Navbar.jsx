import React, { useState, useEffect } from "react";
import "../styles/Navbar.scss";
import Logo from "./Logo";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    // טוען מה-localStorage אם קיים
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; // ברירת מחדל: Dark
  });

  const [menuOpen, setMenuOpen] = useState(false);

  // מפעיל מחלקת light-theme / dark-theme על ה-body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // טוגל המצב
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className={`logo ${darkMode ? "dark" : "light"}`}>
          <Logo />
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
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

          {/* Toggle Button */}
          <li>
            <div className="theme-toggle" onClick={toggleTheme}>
              <div className={`toggle-thumb ${darkMode ? "dark" : "light"}`} />
            </div>
          </li>
        </ul>

        {/* Hamburger Icon */}
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

        {/* Mobile Toggle */}
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
