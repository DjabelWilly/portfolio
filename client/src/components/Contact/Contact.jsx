import React, { useState } from "react";
import validator from "validator";
import "./Contact.css";
import paperPlane from "../../assets/img/paper.svg";
import { API_URL } from "../../config/api";

/**
 * Composant Contact
 *
 * Ce composant affiche un formulaire de contact pour envoyer un email.
 * Il gère la validation des champs du formulaire et l'envoi de l'email.
 * Il affiche également un message de réussite si l'email est envoyé avec succès.
 *
 * @returns {React.ReactElement}
 */
const Contact = () => {
  // État du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false); // Indique si le message a été envoyé
  const [errorMessage, setErrorMessage] = useState(""); // Contient un message d'erreur si applicable

  // Validation du nom : lettres et accents uniquement
  const validateName = (name) => {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/.test(name);
  };

  // Validation email : format email avec caractères autorisés
  const validateEmail = (email) => {
    return validator.isEmail(email) && /^[a-zA-Z0-9@._-]+$/.test(email);
  };

  // Validation du message : lettres, chiffres et accents uniquement
  const validateMessage = (message) => {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s.,!?'-]+$/.test(message);
  };

  // Gestion des changements d'input avec validation dynamique
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));

    let error = "";
    switch (name) {
      case "name":
        if (!validateName(value)) {
          error = "Le nom ne doit contenir que des lettres.";
        }
        break;
      case "email":
        if (!validateEmail(value)) {
          error = "Veuillez entrer une adresse e-mail valide.";
        }
        break;
      case "message":
        if (!validateMessage(value)) {
          error =
            "Le message ne doit contenir que des lettres et des chiffres.";
        }
        break;
      default:
        break;
    }
    setErrorMessage(error);
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorMessage) return; // Empêche l'envoi si une erreur est présente

    // Envoi de l'email vers l'API
    fetch(`${API_URL}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setFormData({ name: "", email: "", message: "" }); // Réinitialise le formulaire
          setMessageSent(true); // Affiche le message de succé
          setTimeout(() => setMessageSent(false), 2500); // Cache le message après 2.5s
        } else {
          throw new Error("Échec de l'envoi de l'email");
        }
      })
      .catch(() => setErrorMessage("Échec de l'envoi de l'email"));
  };

  return (
    <div className="contact-container">
      <h2>Restons en contact</h2>
      <img src={paperPlane} alt="Avion en papier" className="paper-plane" />
      <div className={`message-sent ${messageSent ? "show" : ""}`}>
        {messageSent && <p>Message envoyé avec succès !</p>}
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
              autoComplete="off"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Envoyer
          </button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Contact;
