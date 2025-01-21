import React, { useState } from "react";
import validator from "validator";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanedName = validator.escape(formData.name);
    const cleanedEmail = validator.normalizeEmail(formData.email);
    const cleanedMessage = validator.escape(formData.message);

    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    if (!emailRegex.test(cleanedEmail)) {
      alert("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(cleanedName)) {
      alert("Nom invalide. Seules les lettres et les espaces sont autorisés.");
      return;
    }

    const messageRegex = /^[a-zA-Z0-9\s.,!?'"-]*$/;
    if (!messageRegex.test(cleanedMessage)) {
      alert(
        "Message invalide. Seules les lettres, chiffres et certains caractères spéciaux sont autorisés."
      );
      return;
    }

    fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      <h2>Contact</h2>
      <div className={`message-sent ${messageSent ? "show" : ""}`}>
        {messageSent && <p>Email envoyé avec succès !</p>}
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
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
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
