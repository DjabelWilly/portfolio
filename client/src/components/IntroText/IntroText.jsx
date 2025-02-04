import React, { useState, useEffect } from "react";
import "./IntroText.css";

// Tableau contenant les mots à afficher pendant l'intro
const introText = ["conception", "developpement", "<web/>"];

/**
 * Composant affichant l'intro du site,
 * suivis d'un fade-out et d'un passage au mot suivant.
 * Le contenu principal est affich  une fois que tous les mots ont  t  affich s.
 */
const IntroText = ({ setShowContent }) => {
  const [index, setIndex] = useState(0); // Suivi du mot affiché (intro)

  const [fade, setFade] = useState(true); // Gère le fade-in/fade-out (intro)

  useEffect(() => {
    if (index < introText.length) {
      const handleNextWord = () => {
        // Fonction pour passer au mot suivant
        setIndex((prevIndex) => prevIndex + 1);
        setFade(true); // Activer le fade-in
      };

      const fadeOutTimeout = setTimeout(() => {
        // Fade-out apres 1s
        setFade(false);
      }, 1000);

      const nextWordTimeout = setTimeout(handleNextWord, 2500); // Passer au mot suivant apres 2.5s

      return () => {
        clearTimeout(fadeOutTimeout); // Nettoyage des timeouts
        clearTimeout(nextWordTimeout);
      };
    }
    setShowContent(true); // Affichage du contenu principal
  }, [index, setShowContent]); // Dependance sur l'index

  return (
    <div className={`intro-text ${fade ? "fade-in" : "fade-out"}`}>
      {introText[index]}
    </div>
  );
};

export default IntroText;
