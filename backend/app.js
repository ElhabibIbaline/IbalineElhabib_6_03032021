const express = require("express");

// enregistrer le router dans l'application 
const userRoutes = require('./routes/user');

const mongoose = require('./db/db');



// Connection à la base de données MongoDB avec la sécurité vers le fichier .env pour cacher le mot de passe
// L'un des avantages que nous avons à utiliser Mongoose pour gérer notre base de données MongoDB est que nous pouvons implémenter des schémas de données stricts
// qui permettent de rendre notre application plus robuste
// mongoose.connect(process.env.DB_URI, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connexion à MongoDB réussie !'))
// .catch(() => console.log('Connexion à MongoDB échouée !'));


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


// app.use((req, res, next) => {
//   res.json({ message: "Votre requête a bien été reçue !" });
// });

// Enreistrer les routes ==>la route attendu par le frontend est '/api/auth'
app.use('/api/auth', userRoutes);

module.exports = app;
