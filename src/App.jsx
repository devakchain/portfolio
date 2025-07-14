import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import SkillsSection from "./pages/SkillsSection";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import AboutMe from "./pages/AboutMe";

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="app">
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <main>
        <section id="home">
          <Welcome />
        </section>
        <section id="about">
          <AboutMe />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
