var express = require('express');
const eventController = require('../controllers/eventController');
const verifyToken = require('../middleware/verifyToken');
var router = express.Router();

/* GET users listing. */
router.post('/create', verifyToken ,eventController.createEvent)

module.exports = router;
