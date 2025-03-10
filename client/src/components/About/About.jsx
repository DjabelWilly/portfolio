import React from "react";
import "./About.css";
import profil from "../../assets/img/profile.jpg";
import useDelayedVisibility from "../../hooks/useDelayedVisibility"; // custom hook

const About = ({ scrollToSection }) => {
  const showAbout = useDelayedVisibility(false, 1000); // Affiche About après 1s

  return (
    <div className="about-container">
      <div className="about-content">
        <div
          className={`about-container-text-img${showAbout ? " visible" : ""}`}
        >
          <img src={profil} alt="profil" className="about-image" />
          <p className="about-description">
            Hello, je suis Willy Djabelkhir,{" "}
            <strong>DÉVELOPPEUR WEB FULLSTACK.</strong> <br />
            Je conçois et développe des applications web dynamiques et
            ergonomiques. Du simple site vitrine à l'application sur mesure
            complexe, j'aime créer des solutions innovantes centrées sur
            l'utilisateur.
            <br />
            Passionné par l'informatique et la technologie, j'ai choisi d'en
            faire mon métier en 2023 en suivant une formation de
            <strong> DÉVELOPPEUR WEB</strong>. <br />
            Auparavant, j'étais technicien dans l'industrie de l'électronique,
            l'aérospatiale, et la robotique, où j'ai acquis des compétences clés
            telles que la rigueur, l'analyse, la résolution de problèmes
            complexes, ainsi que le travail en équipe. <br />
            Aujourd'hui, je suis en quête de nouvelles opportunités, prêt à
            relever des défis avec une volonté constante d'apprendre et
            d'innover. <br />
            Je possède des bases solides dans la création de sites web,
            e-commerce et développement applicatif, en m'adaptant aux besoins
            spécifiques du client.
          </p>
        </div>
        <div className="about-btn-container">
          <button
            className={`about-btn${showAbout ? " visible" : ""}`}
            onClick={() => scrollToSection("projects")}
          >
            Voir mes projets
          </button>
          <a href="#contact">
            <button className={`about-btn2${showAbout ? " visible" : ""}`}>
              Contactez-moi
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
