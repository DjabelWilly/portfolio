import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const headerOffset = 60;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setIsMenuOpen(false); // Ferme le menu après le clic
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Willy Djabelkhir</div>
        <div className="social-links">
          <ul>
            <li>
              <a href="mailto:djabel.willy@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/willy-djabelkhir-dwwb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DjabelWilly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Bouton hamburger */}
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li onClick={() => scrollToSection("about")}>À propos</li>
          <li onClick={() => scrollToSection("projects")}>Projets</li>
          <li onClick={() => scrollToSection("education")}>Formation</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
