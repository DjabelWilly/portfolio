import React, { useState, useEffect } from "react";
import "./Education.css";

const Education = () => {
  const [educationitemVisible, setEducationItemVisible] = useState(false);

  useEffect(() => {
    /**
     * Fonction qui détecte la position Y,
     * active la visibilité des éléments de la formation lorsque le scroll
     * est supérieur à 1200px.
     * L'écouteur est supprimé une fois la visibilité activée.
     */
    const scrollPosition = () => {
      if (window.scrollY > 1200) {
        setEducationItemVisible(true);
        window.removeEventListener("scroll", scrollPosition); // Supprime l'écouteur après activation
      }
    };

    window.addEventListener("scroll", scrollPosition);

    return () => {
      window.removeEventListener("scroll", scrollPosition);
    };
  }, []); // exécute le useEffect seulement au premier rendu
  return (
    <div className="education-container">
      <h2>FORMATION</h2>
      <div className="education-timeline">
        <div
          className={`education-item ${educationitemVisible ? "visible" : ""}`}
        >
          <div className="education-date">Nov. 2023 - Juin 2024</div>
          <div className="education-content">
            <h3>DÉVELOPPEUR WEB & WEB MOBILE | BAC+2</h3>
            <h4>DIGINAMIC | MONTPELLIER</h4>
            <ul className="education-details">
              <li>
                Conception d’interfaces utilisateur : analyse des besoins,
                maquettes, prototypes (Figma)
              </li>
              <li>
                Développement frontend : HTML, CSS, Bootstrap, Tailwind,
                JavaScript, React.js
              </li>
              <li>Développement backend : Node.js, Express</li>
              <li>
                Programmation Orientée Objet, Intégration d’API, Tests unitaires
              </li>
              <li>Conception de bases de données : MySQL, MongoDB</li>
              <li>Travail en équipe projet : Git, Github, Agile SCRUM</li>
            </ul>
          </div>
        </div>

        <div
          className={`education-item ${educationitemVisible ? "visible" : ""}`}
        >
          <div className="education-date">Sept. 2024 - Jan. 2025</div>
          <div className="education-content">
            <h3>AUTOFORMATION</h3>
            <ul className="education-details">
              <li>Google Maps API</li>
              <li>Tests unitaires : Jest</li>
              <li>Développement Fullstack : React.js, Next.js</li>
              <li>Déploiement d'une application fullstack : Vercel</li>
              <li>CI/CD : Github + Vercel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
