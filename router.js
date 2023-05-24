const express = require("express");
const router = express.Router();
const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')

//Ruta para index
router.use('/api', indexRouter)

router.use('/api/auth', authRouter)


module.exports = router;
