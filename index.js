

//import des modèles pour la base de donnée
const db = require('./src/models');
const userRouter = require("./src/routes/Users");
const programRouter = require("./src/routes/Programs");
const AuthRouter = require("./src/routes/Auth");
const express = require("express");
const cors = require("cors");

//build node js and express server
const app = express();

//permettre à express de récupérer les données postées dans le body
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/programs", programRouter);
app.use("/auth", AuthRouter)

//synchronisation de la base de données au démarrage du server
db.sequelize.sync().then( () => {

    // choix du port et affichage de la confirmation de lancement de server dans la console
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    })
})
