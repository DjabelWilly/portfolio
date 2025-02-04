import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <h2>FORMATION</h2>
      <div className="education-timeline">
        <div className="education-item">
          <div className="education-date">Nov. 2023 - Juin 2024</div>
          <div className="education-content">
            <h3>DÉVELOPPEUR WEB & WEB MOBILE | RNCP NIV.5 BAC+2</h3>
            <h4>DIGINAMIC | MONTPELLIER</h4>
            <ul className="education-details">
              <li>Maquettage d'interfaces utilisateur web (Figma)</li>
              <li>
                Développement frontend (HTML, CSS, Bootstrap, Tailwind,
                Javascript, React)
              </li>
              <li>Développement backend (PHP, Symfony)</li>
              <li>Conception de bases de données relationnelles (MySQL)</li>
              <li>Conception de bases de données NoSQL (MongoDB)</li>
            </ul>
          </div>
        </div>

        <div className="education-item">
          <div className="education-date">Sept. 2024 - Jan. 2025</div>
          <div className="education-content">
            <h3>AUTOFORMATION</h3>
            <ul className="education-details">
              <li>Développement backend (Node.js, Express.js)</li>
              <li>Google API</li>
              <li>Tests unitaires (Jest)</li>
              <li>Développement Fullstack (Next)</li>
              <li>Déploiement d'une application fullstack (Vercel)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
