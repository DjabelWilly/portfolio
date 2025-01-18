import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <h2>Formation</h2>
      <div className="education-timeline">
        <div className="education-item">
          <div className="education-date">novembre 2023 - juin 2024</div>
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
          <div className="education-date">Novembre 2023 à aujourd'hui</div>
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
