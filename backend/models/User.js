
// créer un model User

// 1--importer mongoose
const mongoose = require('mongoose');

/* --5--
- Installer et importer unique validateur
 */
const uniqueValidator = require('mongoose-unique-validator');

// 2--Créer notre schema en utilisant la f schema de mongoose
const userSchema = mongoose.Schema({
  // 4--Ajouter (unique: true) pr que l'email soit unique
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

/* --6--
- appliquer le validateur au schema avant d'en faire un model
- appeller la methode pluging 
- passer unique validateur comme argument à cette methode
*/
userSchema.plugin(uniqueValidator);

// 3--Exporter le schema sous forme de model
module.exports = mongoose.model('User', userSchema);
