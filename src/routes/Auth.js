const express = require('express');
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//insérer les données dans la BDD avec sequelize
router.post("/login", async (req, res) => {
    const body = req.body;

    // récuperer les données de l'utilisateur existant
    const user = await Users.findOne({
        where: {
            email: body.email,
        },
    });

    // si l'utilisateur n'existe pas, on retourne un message d'erreur
    if (!user) {
        return res.status(401).json({ error: "l'utilisateur n'existe pas" });
    }

    // comparaison du mot de passe reçu et celui de la base de données
    const isPasswordValid = await bcrypt.compare(body.password, user.password);

    // Vérification de la validité du mot de passe
    if (!isPasswordValid) {
        return res.status(401).json({ error: "Le mot de passe est incorrect" });
    }

    // Préparation du token de session 
    const token = jwt.sign(
        {
            id: user.id,
            name: user.name,
            email: user.email,
        },
        'AZERTY', // clé de chiffrement
        { expiresIn: '1h' } // temps d'expiration
    );

    // envoi du token dans les cookies
    // httpOly permet d'empecher l'accès au cookie a partir le code front
    res.cookie('token', token, {
        httpOnly: true,
    });

    res.status(200).json({});
});

//récuperer les données pour créer un nouveau user
router.post("/register", async (req, res) => {
    const user = req.body;

    // récuperer les données du user s'il exist
    const existingUser = await Users.findOne({
        where: {
            email: user.email,
        },
    });

    if (existingUser) {
        return res.status(400).json({ error: "L'utilisateur est deja inscrit" });
    }

    // chiffrement du mot de passe pour securiser la donnée
    const hashedPassword = await bcrypt.hash(user.password, 10);

    // Créer le nouveau user
    await Users.create({
        name: user.name,
        email: user.email,
        password: hashedPassword,
        role: "user"
    });

    res.status(200).json({});
});


module.exports = router;
