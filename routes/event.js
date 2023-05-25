var express = require("express");
const eventController = require("../controllers/eventController");
const verifyToken = require("../middleware/verifyToken");
var router = express.Router();

/* GET users listing. */
router.post("/create", verifyToken, eventController.createEvent);

router.get("/get-events", verifyToken, eventController.getById);

router.put("/update-event/:id", verifyToken, eventController.updateEvent);

router.delete('/delete-event', verifyToken, eventController.deleteEvent)

module.exports = router;
