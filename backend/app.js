const express = require("express");

const mongoose = require("mongoose");

// enregistrer le router dans l'application 
const userRoutes = require('./routes/user');

mongoose
  .connect(
    "mongodb+srv://ElhabibP6:oXuXTrXu03piHihO@cluster0.kzycm.mongodb.net/DevWebP6?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

//Bodyparser est inclus ds express à partir de la version 4.16 ==> Utilisez ( express.json() ) pour analyser le corps de la requête.
app.use(express.json());

app.use((req, res, next) => {
  res.json({ message: "Votre requête a bien été reçue !" });
});

// Enreistrer les routes ==>la route attendu par le frontend est '/api/auth'
app.use('/api/auth', userRoutes);

module.exports = app;
