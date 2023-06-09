var express = require("express");
const eventController = require("../controllers/eventController");
const verifyToken = require("../middleware/verifyToken");
var router = express.Router();

/* GET users listing. */
router.post("/create", verifyToken, eventController.createEvent);

router.get("/get-events", verifyToken, eventController.getEvents);

router.put("/update-event/:id", verifyToken, eventController.updateEvent);

router.delete("/delete-event/:id", verifyToken, eventController.deleteEvent);

router.delete(
  "/delete-invitation/:id",
  verifyToken,
  eventController.deleteInvitation
  );
  
  
router.post("/add-guests/:id", verifyToken, eventController.addContacts);



module.exports = router;
