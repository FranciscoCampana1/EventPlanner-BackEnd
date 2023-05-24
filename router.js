const express = require("express");
const router = express.Router();
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users')
const eventRouter = require('./routes/event')

//Ruta para index
router.use('/api', indexRouter)

router.use('/api/auth', authRouter)

router.use('/api/users', userRouter)

router.use('/api/event', eventRouter)



module.exports = router;
