const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

//RUTA PARA REGISTRARSE COMO USUARIO
router.post("/register", authController.register);


//RUTA PARA QUE LOS USUARIOS PUEDAN LOGEARSE
router.post("/login", authController.login);



module.exports = router;
