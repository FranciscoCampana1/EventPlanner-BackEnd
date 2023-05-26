const { sendErrorResponse } = require("../_util/sendResponse");

const isUser = async (req, res, next) => {
 
  const {user_role} = req;

  if(user_role != "user"){
    return sendErrorResponse (res, 403, "you don't have the necessary permissions")
  }else next()
};
module.exports = isUser;
