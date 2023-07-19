const express = require('express');
const router = express.Router();
const { Programs } = require("../models");

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

//supprimer les données de la BDD avec
//on utilisera la methode DELETE
//:id est un parametre (path param) qui va contenir l'id du programme
router.delete("/:id", async (req, res) => {
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
router.put("/:id", async (req, res) => {
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