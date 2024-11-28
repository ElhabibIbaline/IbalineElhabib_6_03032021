const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true); // Supprime l'avertissement de dépréciation

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => {
    console.error("Erreur de connexion à MongoDB :", err.message);
    process.exit(1); // Arrête le processus en cas d'échec
  });

module.exports = mongoose;