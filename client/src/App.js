import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

// Tableau contenant les mots à afficher
const introText = ["conception", "developpement", "web"];

function App() {
  const [index, setIndex] = useState(0);  // Suivi du mot affiché
  const [showContent, setShowContent] = useState(false);  // Affichage du contenu principal
  const [fade, setFade] = useState(true);  // État pour gérer le fade-in/fade-out

  useEffect(() => {
    if (index < introText.length) {
      const fadeOutTimeout = setTimeout(() => {
        setFade(false);  // Commencer le fade-out
      }, 1000);  // Temps de fade-in avant fade-out

      const nextWordTimeout = setTimeout(() => {
        setIndex(prevIndex => prevIndex + 1);  // Passer au mot suivant
        setFade(true);  // Commencer le fade-in pour le mot suivant
      }, 2500);  // Temps total avant le changement de mot (fade-out + transition)

      return () => {
        clearTimeout(fadeOutTimeout);  // Nettoyage du fadeOut
        clearTimeout(nextWordTimeout);  // Nettoyage du changement de mot
      };
    } else {
      // Afficher le contenu principal après la fin du cycle des mots
      const showMainContentTimeout = setTimeout(() => {
        setShowContent(true);
      }, 1000);  // Attendre la fin du fade-out avant d'afficher le contenu

      return () => clearTimeout(showMainContentTimeout);  // Nettoyage
    }
  }, [index]);


  // Fonction pour faire défiler la page vers une section spécifiée.
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const headerOffset = 60;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {!showContent ? (
        <div className={`intro-text ${fade ? "fade-in" : "fade-out"}`}>
          {introText[index]}
        </div>
      ) : (
        <>
          <Header scrollToSection={scrollToSection} />
          <main className="main-content">
            <section id="about">
              <About scrollToSection={scrollToSection} />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="education">
              <Education />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
