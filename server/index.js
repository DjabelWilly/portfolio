require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const validator = require("validator");
const port = process.env.PORT;
const app = express();

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'https://willy-djabelkhir.vercel.app'],
}));
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

// Fonction de validation pour le nom, l'email et le message
const validateName = (name) => {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/.test(name); // Lettres, accents et espaces
};

const validateEmail = (email) => {
    return validator.isEmail(email) && /^[a-zA-Z0-9@._-]+$/.test(email); // Validation stricte du format email
};

const validateMessage = (message) => {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s.,!?'-]+$/.test(message); // Lettres, chiffres et quelques caractères spéciaux
};

// Route pour envoyer l'e-mail
app.post("/send-email", (req, res) => {
    const { name, email, message } = req.body;

    // Validation des champs du formulaire
    if (!validateName(name)) {
        return res.status(400).send("Le nom ne doit contenir que des lettres.");
    }

    if (!validateEmail(email)) {
        return res.status(400).send("Adresse e-mail invalide.");
    }

    if (!validateMessage(message)) {
        return res.status(400).send("Le message ne doit contenir que des lettres et des chiffres.");
    }

    // Configuration de l'email
    const mailOptions = {
        from: process.env.EMAIL_USER, // e-mail de l'expéditeur
        to: process.env.EMAIL_USER, // e-mail de destination
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Envoi de l'email
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
