import React from "react";
import "./About.css";
import profile from "../../assets/img/profile.jpg";

const About = ({ scrollToSection }) => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-container-text-img">
          <img src={profile} alt="profile" className="about-image" />
          <p className="about-description">
            Hello ! Je suis Willy Djabelkhir,{" "}
            <strong>DÉVELOPPEUR WEB FULLSTACK.</strong> <br />
            Fort d'une expérience en tant que technicien dans l'aérospatiale,
            l'électronique et la robotique, j'ai acquis des compétences clés
            telles que la rigueur, l'analyse, la résolution de problèmes
            complexes, ainsi que le travail en équipe. <br />
            Ma passion pour les nouvelles technologies, m'a logiquement conduit
            vers une formation de <strong> DÉVELOPPEUR WEB</strong>, où j'ai
            acquis des bases solides dans la création de sites web, landing
            pages, e-commerce et développement applicatif selon les besoins du
            client.
            <br />
            Aujourd'hui, je suis en quête de nouvelles opportunités, prêt à
            relever des défis avec une volonté constante d'apprendre et
            d'innover.
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
