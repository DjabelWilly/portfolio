require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const validator = require("validator");
const port = process.env.PORT;
const app = express();

// Config Cors
app.use(cors({
    origin: ['http://localhost:3000', 'https://portfolio-willy-djabelkhir.vercel.app'],
}));

// Middlewares
app.use(bodyParser.json());
app.use(express.json());

// Config Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Route pour envoyer l'e-mail
app.post("/send-email", (req, res) => {
    let { name, email, message } = req.body;

    // Validation et nettoyage des données avec la bibliothèque "validator"
    name = validator.escape(name);
    email = validator.normalizeEmail(email);
    message = validator.escape(message);

    // Vérifier si l'email est valide
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/; // Autoriser uniquement les minuscules et le caractère "@"
    if (!emailRegex.test(email)) {
        return res.status(400).send("Adresse e-mail invalide.");
    }

    // Limiter les caractères autorisés dans le nom
    const nameRegex = /^[a-zA-Z\s]+$/; // Autoriser uniquement les lettres et les espaces
    if (!nameRegex.test(name)) {
        return res.status(400).send("Nom invalide. Seules les lettres et les espaces sont autorisés.");
    }

    // Limiter les caractères autorisés dans le message
    const messageRegex = /^[a-zA-Z0-9\s.,!?'"-]*$/; // Autoriser lettres, chiffres et quelques caractères spéciaux
    if (!messageRegex.test(message)) {
        return res.status(400).send("Message invalide. Seules les lettres, chiffres et certains caractères spéciaux sont autorisés.");
    }

    const mailOptions = {
        from: process.env.EMAIL_USER, // e-mail de l'expéditeur
        to: process.env.EMAIL_USER, // e-mail de destination
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error("Erreur lors de l'envoi de l'e-mail:", error);
            return res.status(500).send("Erreur lors de l'envoi de l'email.");
        }
        res.status(200).send("Email envoyé avec succès !");
    });
});

// Démarre le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
}); 