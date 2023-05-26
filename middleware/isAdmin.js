const { sendErrorResponse } = require("../_util/sendResponse");

const isAdmin = (req, res, next) => {
  const { user_role } = req;
  if (user_role != "admin") {
    return sendErrorResponse(res, 403, "you don't have the necessary permissions");
  } else next();
};

module.exports = isAdmin;