const express = require('express');
const router = express.Router();
const {Programs} = require("../models");

//récupérer les données de la BDD
router.get("/", async (req, res) => {
    
    const listOfPrograms = await Programs.findAll();
    res.json(listOfPrograms);
});

//insérer les données dans la BDD avec sequelize
router.post("/", async (req, res) => {
   
    const program = req.body;

    // async et await permettent d'attendre le remplissage des données avant envoi
    await Programs.create(program);
    res.json(program);
});

module.exports = router;