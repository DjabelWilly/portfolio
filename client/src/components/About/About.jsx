import React from "react";
import "./About.css";
import profile from "../../assets/profile.jpg";

const About = ({ scrollToSection }) => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-container-text-img">
          <img src={profile} alt="profile" className="about-image" />
          <p className="about-description">
            Hello ! Je m’appelle Willy Djabelkhir, développeur web.
            <br /> J'ai travaillé plusieurs années en tant que technicien dans
            divers secteurs tels que l’aérospatiale, l’électronique et la
            robotique. Cette expérience m'a permis d'acquerir des compétences
            clés telles que la rigueur, l’analyse, la résolution de problèmes
            complexes, ainsi que la collaboration en équipe. <br />
            Ma passion pour les nouvelles technologies, m'a conduit vers une
            formation de Développeur web et mobile, où j'ai acquis des bases
            solides dans les technologies du web.
            <br />
            Aujourd'hui, je suis à l'écoute de nouvelles opportunités et de
            projets ambitieux, avec pour objectif de continuer à apprendre et
            concevoir des solutions web performantes et parfaitement adaptées
            aux besoins de chaque client.
          </p>
        </div>
        <div className="about-btn-container">
          <button
            className="about-btn"
            onClick={() => scrollToSection("projects")}
          >
            Voir mes projets
          </button>
          <a href="#contact">
            <button className="about-btn">Contactez-moi</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
