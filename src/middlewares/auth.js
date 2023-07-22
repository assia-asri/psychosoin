const {Users} = require("../models");
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'AZERTY'

const isAdmin = async (req, res, next) => {
  // récupération du token depuis les cookies
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Token introuvable" });
  }
  
  // Verification du token grace a la methode verify de jwt
  const decoded = jwt.verify(token, JWT_SECRET);

  // récuperer les informations de l'utilisateur par son id
  const user = await Users.findOne({ where: { id: decoded.id } });

  // si l'utilisateur n'existe pas, on renvoi une erreur
  if (!user) {
    return res.status(401).json({ error: "Utilisateur instrouvable" });
  }

  // si l'utilisateur est bien un admin on passe a l'etape suivante avec next()
  if (user.role === "admin") {
    req.user = user;
    next();
  } else {
    return res.status(401).json({ error: "Vous avez pas la permission" });
  }

};

const isAuth = async (req, res, next) => {
  // récupération du token depuis les cookies
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Token introuvable" });
  }
  
  // Verification du token grace a la methode verify de jwt
  const decoded = jwt.verify(token, JWT_SECRET);

  // récuperer les informations de l'utilisateur par son id
  const user = await Users.findOne({ where: { id: decoded.id } });

  // si l'utilisateur n'existe pas, on renvoi une erreur
  if (!user) {
    return res.status(401).json({ error: "Utilisateur instrouvable" });
  }

  req.user = user;
  next();
};

module.exports = {
  isAdmin,
  isAuth
}
