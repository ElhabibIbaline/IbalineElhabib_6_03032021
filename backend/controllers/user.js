// Créer les routes d'authentification

// Importer le package de cryptage pr les mp
const bcrypt = require("bcrypt");

// Importer model User car on va enregistrer et lire des users ds ce mdlw
const User = require("../models/User");

// La f signup pour l'enregistrement des nouveaux utilsateurs
exports.signup = (req, res, next) => {
  // Hasher le mp et créer un new user avec le mp crypté...
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      }); // Enregistrer le hash le mp crypté ds la bdd //--On utilise la methode save pr l'enregistrer ds la BDD
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

/*/--
- Implimenter la fonction(f) login qui permet aux utilisateurs existants de se connecter à l'application
- Trouver le user ds la bdd qui correspont à l'adresse email rentrée par l'utilisateur de l'app
- Si jamis l'utilisateur n'existe pas on renvoie une erreur
*/
exports.login = (req, res, next) => {
  //- Utilisation de la methode findOne pr trouver un seul utilisateur de la bdd
  User.findOne({ email: req.body.email })

    //- Ds le then on dois verifier si on a recupré un user ou non
    //- Si jamais on a pas trouvé de user on va renvoyer un 401 en créeant notre propre erreur {user non trouvé}
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }

      //- Utilisation de bcrypt pr comparer le mp envoyé par le user qui assaie de se connecter avec le hash qui est enregisté avec le user 
      bcrypt
        .compare(req.body.password, user.password)

        //- Dans le .then on reçoi un boulen pr savoir si la comparaisn est valable ou non
        //- Si la comparaisosn n'est pas valable c'est que l'utilisateur a rentré le mauvais mp
        //- On reourner une erreur 'mp incorrect' car on a bien trouvé le user mais la comparaison a retournée false
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }

          /*
          - Si on arrive ici c que la comparaison a retourner true et ds ce cas la on va envoyer un statut 200 pr une bonne connection
          - On va renvoyer un ojet json qui contiendra un userId qui est l'identifiant de l'utilisateur ds la base
          - Envoi d'un TOKEN qui sera pr l'instant une simple chaine de caractere
        */
          res.status(200).json({
            userId: user._id,
            token: "TOKEN",
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
