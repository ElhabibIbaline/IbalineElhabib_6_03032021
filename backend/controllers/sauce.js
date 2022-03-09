
//Importer le model sauce
const Sauce = require("../models/Sauce");

exports.createSauce = (req, res, next) => {
  const sauce = new Sauce({
   ...req.body,
  });
  sauce.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

// Lire et afficher une seule sauce de la bdd.
exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({ error }));
}

// Récuperer toutes les sauces de la base MongoDB
exports.getAllSauces = (req, res, next) => {
    Sauce.find()
      .then((sauces) => res.status(200).json(sauces))
      .catch((error) => res.status(404).json({ error }));
  };
  
  
