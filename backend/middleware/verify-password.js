const passwordSchema = require('../models/Password');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: "Le mot de passe n'est pas assez fort! il doit avoir au moins 8 caractères , une maj, une min et un chiffre." });
    } else {
        next();
    }
};
