import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo3.png";

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State pour le menu hamburger

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img
            src={logo}
            alt=""
            onClick={() => scrollToSection("about")}
            style={{ cursor: "pointer" }}
          />
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
          <li
            onClick={() => {
              scrollToSection("about");
              setIsMenuOpen(false);
            }}
          >
            À propos
          </li>
          <li
            onClick={() => {
              scrollToSection("projects");
              setIsMenuOpen(false);
            }}
          >
            Projets
          </li>
          <li
            onClick={() => {
              scrollToSection("education");
              setIsMenuOpen(false);
            }}
          >
            Formation
          </li>
          <li
            onClick={() => {
              scrollToSection("contact");
              setIsMenuOpen(false);
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
