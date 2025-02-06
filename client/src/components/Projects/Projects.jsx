import React, { useState, useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    /**
     * Fonction qui détecte la position de la barre de défilement et
     * active la visibilité des éléments de la grille des projets
     * lorsque le scroll est supérieur à 400px.
     * L'écouteur est supprimé une fois la visibilité activée.
     */
    const scrollPosition = () => {
      if (window.scrollY > 400) {
        setCardVisible(true);
        window.removeEventListener("scroll", scrollPosition); // Supprime l'écouteur après activation
      }
    };

    window.addEventListener("scroll", scrollPosition);

    return () => {
      window.removeEventListener("scroll", scrollPosition);
    };
  }, []); // exécute le useEffect seulement au premier rendu

  return (
    <div className="projects-container">
      <h2>PROJETS</h2>
      <div className="projects-grid">
        {/* Projet 1  */}
        <div
          className={`project-card ${cardVisible ? "visible" : ""}`}
          onClick={() =>
            window.open("https://video-games-frontend.vercel.app", "_blank")
          }
          style={{ cursor: "pointer" }}
        >
          <h3>Video Games Sales Dashboard</h3>
          <p className="project-description">
            Cette application est un outil de monitoring des ventes d'un
            commerce de jeux video. Elle permet de suivre et d'analyser les
            ventes par région, de visualiser les données, d'ajouter de nouvelles
            données, de modifier et de supprimer les données existantes.
          </p>
          <div className="project-stack">
            <span>
              <i className="fab fa-node-js"></i> Node.js
            </span>
            <span>
              <i className="fab fa-node-js"></i> Express.js
            </span>
            <span>
              <i className="fab fa-react"></i> React
            </span>
            <span>
              <i className="fas fa-exchange-alt"></i> Axios
            </span>
            <span>
              <i className="fas fa-chart-line"></i> Chart.js
            </span>
            <span>
              <i className="fas fa-database"></i> MongoDB
            </span>
          </div>
        </div>

        {/* Projet 2  */}
        <div
          className={`project-card ${cardVisible ? "visible" : ""}`}
          onClick={() => window.open("https://nearby-mtp.vercel.app", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <h3>Nearby MTP</h3>
          <p className="project-description">
            Cette application permet aux utilisateurs de rechercher des lieux et
            des activités à Montpellier et ses alentours. Elle utilise l'API
            Google Places pour récupérer les résultats de recherche et les
            afficher sur une carte. Les utilisateurs peuvent filtrer les
            résultats par activité et par rayon et afficher des informations
            détaillées sur chaque lieu.
          </p>
          <div className="project-stack">
            <span>
              <i className="fab fa-node-js"></i> Node.js
            </span>
            <span>
              <i className="fab fa-node-js"></i> Express.js
            </span>
            <span>
              <i className="fab fa-react"></i> React
            </span>
            <span>
              <i className="fas fa-exchange-alt"></i> Axios
            </span>
            <span>
              <i className="fab fa-google"></i> Google API
            </span>
            <span>
              <svg
                viewBox="0 0 24 24"
                className="tailwind-icon"
                fill="currentColor"
              >
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
              </svg>
              Tailwind
            </span>
          </div>
        </div>

        {/* Projet 3  */}
        <div
          className={`project-card ${cardVisible ? "visible" : ""}`}
          onClick={() => window.open("https://aurora-wd.vercel.app", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <h3>Aurora</h3>
          <p className="project-description">
            Site vitrine d'une agence de voyages spécialisés dans les
            expéditions dans la nature arctique. Le site offre une expérience
            immersive pour les visiteurs, avec des informations détaillées sur
            les services, destinations et activités.
          </p>
          <div className="project-stack">
            <span>
              <i className="fab fa-html5"></i> HTML
            </span>
            <span>
              <i className="fab fa-css3-alt"></i> CSS
            </span>
            <span>
              <i className="fab fa-js"></i> JavaScript
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
