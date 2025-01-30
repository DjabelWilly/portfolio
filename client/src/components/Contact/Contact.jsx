import React, { useState } from "react";
import validator from "validator";
import "./Contact.css";
import paperPlane from "../../assets/paper.svg";
import { API_URL } from "../../config/api";

/**
 * Composant Contact pour la soumission d'un formulaire.
 *
 * @component
 * @example
 * const handleSubmit = (e) => {
 *   // Gérer la soumission du formulaire
 * }
 *
 * @returns {JSX.Element} Le formulaire de contact.
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Gestionnaire de changement pour le formulaire.
   * @param {Event} e - L'événement de changement.
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Gestionnaire de soumission du formulaire.
   * @param {Event} e - L'événement de soumission.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Nettoyage et validation des entrées
    const cleanedName = validator.escape(formData.name);
    const cleanedEmail = validator.normalizeEmail(formData.email);
    const cleanedMessage = validator.escape(formData.message);

    // Vérification de l'adresse e-mail
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    if (!emailRegex.test(cleanedEmail)) {
      setError("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    // Vérification du nom
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(cleanedName)) {
      setError(
        "Nom invalide. Seules les lettres et les espaces sont autorisés."
      );
      return;
    }

    // Vérification du message
    const messageRegex = /^[a-zA-Z0-9\s.,!?'"-]*$/;
    if (!messageRegex.test(cleanedMessage)) {
      setError(
        "Message invalide. Seules les lettres, chiffres et certains caractères spéciaux sont autorisés."
      );
      return;
    }

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cleanedName,
          email: cleanedEmail,
          message: cleanedMessage,
        }),
      });

      if (!response.ok) {
        throw new Error(`erreur HTTP status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Email envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
      setMessageSent(true);
      setError(null);
      setTimeout(() => {
        setMessageSent(false);
      }, 2500);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setError(
        "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
      );
    }
  };

  return (
    <div className="contact-container">
      <h2>Restons en contact</h2>
      <img src={paperPlane} alt="Avion en papier" className="paper-plane" />
      <div className={`message-sent ${messageSent ? "show" : ""}`}>
        {messageSent && <p>Message envoyé avec succès !</p>}
      </div>
      {error && <p className="error-message">{error}</p>}
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
      </div>
    </div>
  );
};

export default Contact;
