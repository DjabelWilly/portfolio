import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';


function App() {

  const [showContent, setShowContent] = useState(false); // Affichage du contenu principal à true
  const [fadeInMain, setFadeInMain] = useState(false); // Gère le fade-in du contenu principal

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
      {!showContent ? (<Intro setFadeInMain={setFadeInMain} setShowContent={setShowContent} />
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
