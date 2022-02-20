const express = require("express");

// enregistrer le router dans l'application
const userRoutes = require("./routes/user");

const mongoose = require("./db/db");

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

// Enreistrer les routes ==>la route attendu par le frontend est '/api/auth'
app.use("/api/auth", userRoutes);

module.exports = app;
