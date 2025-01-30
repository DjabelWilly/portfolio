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
  const handleSubmit = (e) => {
    e.preventDefault();

    //--------- Nettoyage et Validation des entrées------------
    // Nettoyage des données du formulaire
    const cleanedName = validator.escape(formData.name);
    const cleanedEmail = validator.normalizeEmail(formData.email);
    const cleanedMessage = validator.escape(formData.message);

    // Vérification de l'adresse e-mail
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    if (!emailRegex.test(cleanedEmail)) {
      alert("Veuillez entrer une adresse e-mail valide.");
      return;
    }
    // Vérification du nom
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(cleanedName)) {
      alert("Nom invalide. Seules les lettres et les espaces sont autorisés.");
      return;
    }
    // Vérification du message
    const messageRegex = /^[a-zA-Z0-9\s.,!?'"-]*$/;
    if (!messageRegex.test(cleanedMessage)) {
      alert(
        "Message invalide. Seules les lettres, chiffres et certains caractères spéciaux sont autorisés."
      );
      return;
    }
    //---------------------------------------------------------

    // Envoi de l'email vers la route send-email
    fetch(`${API_URL}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: cleanedName,
        email: cleanedEmail,
        message: cleanedMessage,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Email envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
          setMessageSent(true);
          setTimeout(() => {
            setMessageSent(false);
          }, 2500);
        } else {
          throw new Error("Échec de l'envoi de l'email.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
      </div>
    </div>
  );
};

export default Contact;
