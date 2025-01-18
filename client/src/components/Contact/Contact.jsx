import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:djabel.willy@gmail.com">djabel.willy@gmail.com</a>
            </li>
            <li>
              <i className="fab fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/willy-djabelkhir-dwwb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Willy Djabelkhir
              </a>
            </li>
            <li>
              <i className="fab fa-github"></i>
              <a
                href="https://github.com/DjabelWilly"
                target="_blank"
                rel="noopener noreferrer"
              >
                DjabelWilly
              </a>
            </li>
          </ul>
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
    </div>
  );
};

export default Contact;
