import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

function App() {

  // Fonction pour faire défiler la page vers une section spécifiée.
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const headerOffset = 35;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <main>
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
    </div>
  );
}

export default App;
