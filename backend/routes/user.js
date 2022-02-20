
//créer le router correspondant

//Importer express pr créer un Router
const express = require('express');

//Créer le Router avec la f Router d'express
const router = express.Router();

// importer le controller pr associer les f aux differentes routes
const userCtrl = require('../controllers/user');


// Créer 2 routes post ==> Car le frontend va également envoyer des infos ==> l'adresse mail et le MP
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

//Exporter le router pour l'importer ds app.js

module.exports = router;

