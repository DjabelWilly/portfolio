import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";
import useDelayedVisibility from "../../hooks/useDelayedVisibility"; // custom hook

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State pour le menu hamburger
  const showHeader = useDelayedVisibility(false, 1200); // Affiche Header après 0.5s

  return (
    // Ajout de la classe "visible" au header lorsque showHeader est true
    <header className={`header ${showHeader ? "visible" : ""}`}>
      <nav className="nav">
        <div className="logo">
          <img
            src={logo}
            alt=""
            onClick={() => scrollToSection("about")}
            style={{ cursor: "pointer" }}
          />
          <p>
            CONCEPTION & <br /> DÉVELOPPEMENT WEB
          </p>
        </div>
        <div className="social-links">
          <ul>
            <li>
              <a href="mailto:djabel.willy@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/willy-djabelkhir-dwwb"
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
          <li
            onClick={() => {
              scrollToSection("about");
              setIsMenuOpen(false);
            }}
          >
            A PROPOS
          </li>
          <li
            onClick={() => {
              scrollToSection("projects");
              setIsMenuOpen(false);
            }}
          >
            PROJETS
          </li>
          <li
            onClick={() => {
              scrollToSection("education");
              setIsMenuOpen(false);
            }}
          >
            FORMATION
          </li>
          <li
            onClick={() => {
              scrollToSection("contact");
              setIsMenuOpen(false);
            }}
          >
            CONTACT
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
