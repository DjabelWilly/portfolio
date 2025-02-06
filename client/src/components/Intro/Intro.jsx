import React, { useState, useEffect } from "react";
import "./Intro.css";

// Tableau contenant les mots et les images
const introElements = ["CONCEPTION", "DÉVELOPPEMENT", "< WEB />"];

const Intro = ({ setShowContent }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Si on est encore dans le tableau des éléments
    if (index < introElements.length) {
      const handleNextElement = () => {
        setFade(false); // Commencer à estomper avant de changer
        setTimeout(() => {
          setIndex((prevIndex) => prevIndex + 1); // Passer à l'élément suivant
          setFade(true); // Redémarrer l'animation pour le nouvel élément
        }, 2000); // Délai avant de passer au prochain élément (à ajuster selon l'animation)
      };

      const fadeOutTimeout = setTimeout(() => setFade(false), 2000); // Délai de fondu
      const nextElementTimeout = setTimeout(handleNextElement, 3000); // Passer à l'élément suivant après 3 secondes

      return () => {
        clearTimeout(fadeOutTimeout);
        clearTimeout(nextElementTimeout);
      };
    }

    setShowContent(true); // Une fois tous les éléments affichés, signaler la fin
  }, [index, setShowContent]);

  // Empêche l'affichage d'un élément après le dernier
  if (index >= introElements.length) return null;

  return (
    <div className={`intro ${fade ? "fade-in" : "fade-out"}`}>
      {introElements[index]}
    </div>
  );
};

export default Intro;
