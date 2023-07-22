const express = require('express');
const router = express.Router();
const { Programs } = require("../models");
const { isAuth, isAdmin } = require('../middlewares/auth');

//récupérer les données de la BDD
router.get("/", isAuth, async (req, res) => {

    const listOfPrograms = await Programs.findAll();
    res.json(listOfPrograms);
});

//récuperer les données de un seul programme par id
router.get("/:id", isAuth, async (req, res) => {
    const programId = req.params.id

    const program = await Programs.findOne({
        where: {
            id: programId
        }
    });
    res.json(program);
})

//insérer les données dans la BDD avec sequelize
router.post("/", isAdmin, async (req, res) => {

    const program = req.body;

    // async et await permettent d'attendre le remplissage des données avant envoi
    await Programs.create(program);
    res.json(program);
});

//supprimer les données de la BDD avec
//on utilisera la methode DELETE
//:id est un parametre (path param) qui va contenir l'id du programme
router.delete("/:id", isAdmin, async (req, res) => {
    const programId = req.params.id

    // methode destroy de sequelize prend en parametre where,
    // pour determiner l'id du programme a supprimer
    await Programs.destroy({
        where:
        {
            id: programId
        }
    });

    res.send(programId);
})

//utilisation de la methode put de HTTP avec path param et body
router.put("/:id", isAdmin, async (req, res) => {
    const program = req.body;
    const programId = req.params.id;

    // methode destroy de sequelize prend en parametre where,
    // pour determiner l'id du programme a supprimer
    await Programs.update(
        {
            slug: program.slug,
            name: program.name,
            slogan: program.slogan,
            description: program.description,
            url: program.url,
            price: program.price,
        },
        {
            where: {
                id: programId
            }
        }
    );

    //renvoi du nouveau programme modifié
    res.send(program);
})

module.exports = router;