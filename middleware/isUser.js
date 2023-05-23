const { sendErrorResponse } = require("../_util/sendResponse");

const isUser = async (req, res, next) => {
 
  const {user_role} = req;

  if(user_role != "user"){
    return sendErrorResponse (res, 403, "no tiene los permisos necesarios")
  }else next()
};
module.exports = isUser;
