
//le package dotenv pour la gestion des variables d'environnement
require('dotenv').config();
// const  dotenv  =  require ( 'dotenv' );

const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

  module.exports = mongoose;