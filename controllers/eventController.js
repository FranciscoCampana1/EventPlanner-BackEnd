const eventController = {};
const { User, Event, User_event, Diary } = require("../models");
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

eventController.getEvents = async (req, res) => {
  try {
    const event = await User_event.findAll({
      where: { user_id: req.user_id },
      attributes: {
        exclude: ["createdAt", "updatedAt", "id", "user_id", "event_id"],
      },
      include: {
        model: Event,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: User,
          attributes: {
            exclude: [
              "id",
              "email",
              "password",
              "role_id",
              "createdAt",
              "updatedAt",
            ],
          },
        },
      },
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
    const description = req.body.description;
    const date = req.body.date;
    const time = req.body.time;
    const updateEvent = await Event.update(
      { date: date, time: time, title: title, description: description },
      { where: { id: event_id, id_admin: req.user_id } }
    );

    if (updateEvent == 1) {
      return sendSuccsessResponse(res, 200, {
        message: "Modified event successfully",
      });
    } else {
      return sendErrorResponse(res, 404, "something went wrong");
    }
  } catch (error) {
    return sendErrorResponse(res, 500, "The event cannot be modified", error);
  }
};

eventController.addContacts = async (req, res) => {
  try {
    const event_id = req.params.id;
    const event = await Event.findOne({
      where: { id: event_id },
    });
    const { user_id } = req.body;
    //aqui un metodo findAll para luego hacer que se puedan agregar muchos contactos recorriendo la variable contacts
    // const contacts = await Diary.findAll({
    //   where: { user_id: req.user_id },
    // });

    if (event.id_admin == req.user_id) {
      const modifiedEvent = await User_event.create({
        user_id: user_id,
        event_id: req.user_id,
      });
      return sendSuccsessResponse(res, 200, {
        success: true,
        message: "Contact agree successfully",
      });
    } else {
      return sendErrorResponse(
        res,
        400,
        "To add contacts you must correctly complete the required fields"
      );
    }
  } catch (error) {
    return sendErrorResponse(res, 500, "something went wrong", error);
  }
};

eventController.deleteEvent = async (req, res) => {
  try {
    const event_id = req.params.id;

    const event = await Event.findOne({
      where: { id: event_id },
    });
    if (event.id_admin == req.user_id) {
      await User_event.destroy({
        where: { event_id: event_id },
      });
      const deleteEvent = await Event.destroy({
        where: { id: event_id, id_admin: req.user_id },
      });
      if (deleteEvent) {
        return sendSuccsessResponse(res, 200, {
          message: "Delete event successfully",
        });
      }
    } else {
      return sendErrorResponse(
        res,
        404,
        "To delete an event you must correctly complete the required fields"
      );
    }
  } catch (error) {
    return sendErrorResponse(res, 500, "Can't delete event", error);
  }
};

eventController.deleteInvitation = async (req, res) => {
  try {
    const event_id = req.params.id;

    const event = await Event.findOne({
      where: { id: event_id },
    });
    if (event) {
      const deleteEvent = await User_event.destroy({
        where: { user_id: req.user_id, event_id: event_id },
      });

      if (deleteEvent == 1) {
        return sendSuccsessResponse(res, 200, {
          message: "Delete invitation successfully",
        });
      }
    } else {
      return sendErrorResponse(
        res,
        404,
        "To delete an invitation you must correctly complete the required fields"
      );
    }
  } catch (error) {
    return sendErrorResponse(res, 500, "Can't delete invitation", error);
  }
};

module.exports = eventController;
