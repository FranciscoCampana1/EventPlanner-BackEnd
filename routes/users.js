var express = require('express');
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');
var router = express.Router();
const isAdmin = require('../middleware/isAdmin')

/* GET users listing. */
router.get('/get-all', verifyToken, isAdmin,userController.getAll)

module.exports = router;
