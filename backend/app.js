const express = require("express");

// enregistrer le router dans l'application
const userRoutes = require("./routes/user");

// enregistrer le router dans l'application
const sauceRoutes = require("./routes/sauce");

const mongoose = require("./db/db");

const path = require('path');

const app = express();

//Bodyparser est inclus ds express à partir de la version 4.16 ==> Utilisez ( express.json() ) pour analyser le corps de la requête.
app.use(express.json());

// --2--cros
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

// Enreistrer les routes ==>la route attendu par le frontend est '/api/auth'
app.use("/api/auth", userRoutes);

// Enreistrer la route
app.use("/api/sauces", sauceRoutes);

module.exports = app;
