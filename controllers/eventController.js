const eventController = {};
const { User, Event, User_event } = require("../models");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");

eventController.createEvent = async (req, res) => {
  try {
    const { title, description, date, time } = req.body;
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

    const newUserEvent = await User_event.create({
      user_id: userAdmin.id,
      event_id: newEvent.id,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return sendSuccsessResponse(res, 200, {
      message: "Event created succesfully",
      newEvent,
    });
  } catch (error) {
    return sendErrorResponse(res, 500, "Is not possible created event", error);
  }
};

eventController.getById = async (req, res) => {
  try { 
    const event = await User_event.findAll({
      where: { user_id: req.user_id},
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Event,
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        }, include: {
          model: User,
          attributes:{
            exclude: ["id","email", "password", "role_id", "createdAt", "updatedAt"]
          }
        }
      }
    });

    if (event == 0) {
      return sendErrorResponse(res, 404, "Don't have events");
    } else {
      sendSuccsessResponse(res, 200, {
        message: "Your Events",
        events: event,
      });
    }
  } catch (error) {
    return sendErrorResponse(res, 500, "No events found", error);
  }
};

eventController.updateEvent = async (req, res) => {
  try {
    const event_id = req.params.id;
    const title = req.body.title;
    const date = req.body.date;
    const time = req.body.time;
    const updateEvent = await Event.update(
      { date: date, time: time, title: title },
      { where: { id: event_id, id_admin: req.user_id } }
    );

    if (updateEvent == 1) {
      return sendSuccsessResponse(res, 200, {
        message: "Modified event successfully",
        updateEvent,
      });
    } else {
      return sendErrorResponse(
        res,
        404,
        "You must correctly complete the required fields"
      );
    }
  } catch (error) {
    return sendErrorResponse(res, 500, "The event cannot be modified", error);
  }
};



eventController.deleteEvent = async (req, res) =>{
  //la funcion para eliminar el evento
}



module.exports = eventController;
