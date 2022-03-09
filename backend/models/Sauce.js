// On importe mongoose
const mongoose = require('mongoose')
// Création d'un schema mangoose pour implimenter les intercations avec notre bdd md

const sauceSchema = mongoose.Schema({
  // -- l'identifiant MongoDB unique de l'utilisateur qui a créé la sauce
  userId: { type: String, required: true },
    // -- Nom de la sauce
  name: { type: String, required: true },
   // -- fabricant de la sauce
  manufacturer: { type: String, required: true},
   // -- description de la sauce
  description: { type: String, required: true },
   // --le principal ingrédient épicé de la sauce
  mainPepper: { type: String, required: true},
    // --l'URL de l'image de la sauce téléchargée par l'utilisateur
  imageUrl: { type: String, required: true },
    // --nombre entre 1 et 10 décrivant la sauce
  heat: { type: Number, required: true},
    // -- nombre d'utilisateurs qui aiment (= likent) la sauce
  likes: { type: Number, required: true },
    // -- nombre de dislike reçu
  dislikes: { type: Number, required: true},
    // --Utilisateurs qui aiment la sauce
  usersLiked: { type: [String], required: true },
    // --Utilisateur qui n'aiment pas la sauce
  usersDisliked: { type: [String], required: true},
})

module.exports = mongoose.model('Sauce', sauceSchema)
