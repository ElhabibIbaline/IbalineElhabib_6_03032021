// Créer les routes d'authentification

// Importer le package de cryptage pr les mp
const bcrypt = require("bcrypt");

// Importer model User car on va enregistrer et lire des users ds ce mdlw
const User = require("../models/User");

// La f signup pour l'enregistrement des nouveaux utilsateurs
exports.signup = (req, res, next) => {
  // Hasher le mp et créer un new user avec le mp crypté...
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      }); // Enregistrer le hash le mp crypté ds la bdd //--On utilise la methode save pr l'enregistrer ds la BDD
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

// La f login pour connecter les utilisateurs existants
exports.login = (req, res, next) => {};
