import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projets</h2>
      <div className="projects-grid">
        <div
          className="project-card"
          onClick={() =>
            window.open("https://video-games-frontend.vercel.app", "_blank")
          }
          style={{ cursor: "pointer" }}
        >
          <h3>video_games</h3>
          <p className="project-description">
            Monitoring des ventes (CRUD, filtre, ...)
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

        <div className="project-card">
          <h3>nearbyMTP</h3>
          <p className="project-description">
            Recherche de lieux/activités autour de Montpellier
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

        <div
          className="project-card"
          onClick={() => window.open("https://aurora-wd.vercel.app", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <h3>Aurora</h3>
          <p className="project-description">
            Site vitrine d'une agence de voyages spécialisés
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
