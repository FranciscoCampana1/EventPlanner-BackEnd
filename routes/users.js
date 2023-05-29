var express = require('express');
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');
var router = express.Router();
const isAdmin = require('../middleware/isAdmin')

/* GET users listing. */
router.get('/get-all', verifyToken, isAdmin, userController.getAll)

router.get('/get-my-contacts', verifyToken, userController.getMyContacts)

router.get('/get-profile', verifyToken, userController.getProfile)

router.post('/create-contact', verifyToken, userController.createContact)


module.exports = router;
