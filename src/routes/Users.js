const express = require('express');
const router = express.Router();
const {Users} = require("../models");
const { isAdmin } = require('../middlewares/auth');

//récupérer les données de la BDD
router.get("/", isAdmin, async (req, res) => {
    
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
});

//insérer les données dans la BDD avec sequelize
router.post("/", isAdmin, async (req, res) => {
    //console.log('hello world');
    const user = req.body;

    // async et await permettent d'attendre le remplissage des données avant envoi
    await Users.create(user);
    res.json(user);
});

module.exports = router;