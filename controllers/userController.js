const userController = {};
const { User } = require("../models");
const { getPagesFromCountLimit, normalizePage } = require("../_util/util");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");
const {hash} = require("../_util/hash")



//CONTROLADOR PARA VER TODOS LOS USUARIOS REGISTRADOS (SOLO SI ES ADMIN PUEDE VER LOS PACIENTES)
userController.getAll = async (req, res) => {
    let { page } = req.query;
    LIMIT = 6;
    try {
      const count = await User.count();
      const pages = getPagesFromCountLimit(count, LIMIT);
      page = normalizePage(page, pages);
      const users = await User.findAll({limit: LIMIT, offset: (page - 1) * LIMIT, attributes: {exclude: ["password"]},
      });
      sendSuccsessResponse(res, 200, {
        info: {
          total_results: count,
          limit_results: users.length,
          page: page,
          total_pages: pages,
        },
        results: users,
      });
    } catch (error) {
      sendErrorResponse(res, 500, "Failed to retrieve users", error);
    }
  };


  module.exports = userController 