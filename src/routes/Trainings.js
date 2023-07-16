const express = require('express');
const router = express.Router();
const {Trainings} = require("../models");

//récupérer les données de la BDD
router.get("/", async (req, res) => {
    
    const listOfTrainings = await Trainings.findAll();
    res.json(listOfTrainings);
});

//insérer les données dans la BDD avec sequelize
router.post("/", async (req, res) => {
   
    const training = req.body;

    // async et await permettent d'attendre le remplissage des données avant envoi
    await Trainings.create(training);
    res.json(training);
});

module.exports = router;