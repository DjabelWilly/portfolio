import React from "react";
import "./About.css";
import profile from "../../assets/profile.jpg";
const About = () => {
  return (
    <div className="about-container">
      <h2>À Propos de Moi</h2>
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
            Ma passion pour les nouvelles technologies et le développement de
            solutions innovantes, m'a conduit vers une formation certifiante
            (bac+2) de Développeur web et mobile, où j'ai acquis une base solide
            dans les technologies du web.
            <br />
            Aujourd'hui, je suis à l'écoute de nouvelles opportunités et de
            projets ambitieux, avec pour objectif de continuer à apprendre et
            concevoir des solutions web performantes et parfaitement adaptées
            aux besoins de chaque client.
          </p>
        </div>
        <div className="about-btn-container">
          <a href="#projects">
            <button className="about-btn">Voir mes projets</button>
          </a>
          <a href="#contact">
            <button className="about-btn">Contactez-moi</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
