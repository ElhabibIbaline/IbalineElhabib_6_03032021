
//Importer express pr créer un Router
const express = require('express');

//Créer le Router avec la f Router d'express
const router = express.Router();

// importer le controller pr associer les f aux differentes routes
const sauceCtrl = require('../controllers/sauce.js');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

router.post('/', auth, multer, sauceCtrl.createSauce);

// Renvoie la sauce avec l’_id fourni, affiche une seule sauce.
router.get('/:id', auth, sauceCtrl.getOneSauce);

// // Renvoie un tableau de toutes les sauces de la base de données.
router.get("/", auth, sauceCtrl.getAllSauces);

//Exporter le router pour l'importer ds app.js
module.exports = router;

