import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>À Propos de Moi</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            "Bonjour, je suis Willy, développeur web passionné par les nouvelles
            technologies. <br />
            Je conçois des applications et des sites web modernes, performants
            et responsives. <br />
          </p>
        </div>
        <div className="btn-about">
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
