require('dotenv').config();
const express = require("express");
const sgMail = require('@sendgrid/mail');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configurer SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Route pour envoyer l'e-mail
app.post("/send-email", (req, res) => {
    const { name, email, message } = req.body;

    const msg = {
        to: process.env.EMAIL_USER, // e-mail de destination
        from: email, // e-mail de l'expéditeur
        subject: `Nouveau message de ${name}`,
        text: message,
    };

    sgMail.send(msg)
        .then(() => {
            res.status(200).send("Email envoyé avec succès !");
        })
        .catch((error) => {
            console.error("Erreur SendGrid:", error.response.body);
            res.status(500).send("Erreur lors de l'envoi de l'email.");
        });
});

// Démarre le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
}); 