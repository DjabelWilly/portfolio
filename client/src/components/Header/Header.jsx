import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Ferme le menu après le clic
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Mon Portfolio</div>

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
