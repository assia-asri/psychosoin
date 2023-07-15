const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json("Hello world");
});

//insérer les données dans la BDD avec sequelize
router.post("/", (req, res) => {
    res.json("Hello world");
});

module.exports = router; 