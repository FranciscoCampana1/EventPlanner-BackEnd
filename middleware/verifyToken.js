const { getTokenFromHeader, decodedToken } = require("../_util/token");
const { sendErrorResponse } = require("../_util/sendResponse");

//FUNCION PARA VERIFICAR TOKEN 
const verifyToken = (req, res, next) => {
  const token = getTokenFromHeader(req.headers);
  if (!token) {
    return sendErrorResponse(res, 401, "No se encontró ningún token de autorización");
  }
  try {
    const decoded = decodedToken(token);
    req.user_id = decoded.user_id;
    req.user_role = decoded.user_role;
    next();
  } catch (error) {
    sendErrorResponse(res, 400, "Token invalido", error);
  }
};
module.exports = verifyToken;