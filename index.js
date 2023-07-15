//build node js and express server
const express = require("express");
const app = express();

app.use(express.json());

//import des modèles pour la base de donnée
const db = require('./src/models');

//Routers
const userRouter = require('./src/routes/Users');
app.use("/users", userRouter);

//synchronisation de la base de données au démarrage du server
db.sequelize.sync().then( () => {

    // choix du port et affichage de la confirmation de lancement de server dans la console
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    })
})
