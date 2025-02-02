import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

// Tableau contenant les mots à afficher pendant l'intro
const introText = ["conception", "developpement", "<web/>"];

function App() {
  const [index, setIndex] = useState(0);  // Suivi du mot affiché (intro)
  const [showContent, setShowContent] = useState(false);  // Affichage du contenu principal à true
  const [fade, setFade] = useState(true);  // Gère le fade-in/fade-out (intro)
  const [fadeInMain, setFadeInMain] = useState(false); // Gère le fade-in du contenu principal

  useEffect(() => {
    if (index < introText.length) {
      const handleNextWord = () => { // Fonction pour passer au mot suivant
        setIndex(prevIndex => prevIndex + 1);
        setFade(true); // Activer le fade-in
      };

      const fadeOutTimeout = setTimeout(() => { // Fade-out apres 1s
        setFade(false);
      }, 1000);

      const nextWordTimeout = setTimeout(handleNextWord, 2500); // Passer au mot suivant apres 2.5s

      return () => {
        clearTimeout(fadeOutTimeout); // Nettoyage des timeouts
        clearTimeout(nextWordTimeout);
      };
    }
    setShowContent(true); // Affichage du contenu principal
  }, [index]); // Dependance sur l'index

  // Déclencher le fade-in du contenu principal après un court délai
  useEffect(() => {
    if (showContent) {
      const fadeInTimeout = setTimeout(() => {
        setFadeInMain(true);
      }, 500);

      return () => clearTimeout(fadeInTimeout);
    }
  }, [showContent]);


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
          <Header scrollToSection={scrollToSection} fadeInMain={fadeInMain} />
          <main className={`main-content ${fadeInMain ? "show" : ""}`}>
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
