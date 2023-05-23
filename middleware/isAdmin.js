const { sendErrorResponse } = require("../_util/sendResponse");

const isAdmin = (req, res, next) => {
  const { user_role } = req;
  if (user_role != "admin") {
    return sendErrorResponse(res, 403, "No tiene los permisos necesarios");
  } else next();
};

module.exports = isAdmin;