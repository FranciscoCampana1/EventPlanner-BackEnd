const eventController = {};
const { User, Event,} = require("../models");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");



eventController.createEvent = async (req, res) => {
    try {
      const { title, description , date, time,  } = req.body;
      const userAdmin = await User.findOne({
        where: { id: req.user_id },
      });
      const newEvent = await Event.create({
        title: title,
        description: description,
        date: date,
        time: time,
        id_admin: userAdmin.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      
      return sendSuccsessResponse(res, 200, {
        message: "Event created succesfully",
        newEvent,
      });
    } catch (error) {
      return sendErrorResponse(res, 500, "Is not possible created event", error);
    }
  };




module.exports = eventController