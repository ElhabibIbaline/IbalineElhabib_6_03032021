
//Importer express pr créer un Router
const express = require('express');

//Créer le Router avec la f Router d'express
const router = express.Router();

// importer le controller pr associer les f aux differentes routes
const sauceCtrl = require('../controllers/sauce.js');

// // Renvoie un tableau de toutes les sauces de la base de données.
router.get("/", sauceCtrl.getAllSauces);

// //Renvoie la sauce avec l’_id fourni, affiche une seule sauce.
router.get('/:id', sauceCtrl.getOneSauce);

//Exporter le router pour l'importer ds app.js
module.exports = router;

