const authController = {};
const { User, Role} = require("../models");
const bcrypt = require("bcrypt");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");
const { compareHash } = require("../_util/hash");
const { generateToken } = require("../_util/token");

//CONTROLADOR PARA REGISTRAR PACIENTES
authController.register = async (req, res) => {
  try {
    const {
      name,
      surname,
      email,
      password,
    } = req.body;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const newUser = await User.create({
      name: name,
      surname: surname,
      email: email,
      password: encryptedPassword,
      role_id: 1,
    });

    return sendSuccsessResponse(res, 200, {
      message: "Usuario creado correctamente",
    });
  } catch (error) {
    return sendErrorResponse(res, 500, "Algo salió mal", error);
  }
};

authController.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return sendErrorResponse(
        res,
        400,
        "Debe completar los campos requeridos correctamente"
      );
    }
    try {
      const user = await User.findOne({ where: { email: email }, include: [{
        model: Role,
      }] });
      if (!user) {
        return sendErrorResponse(res, 404, "Email no existente");
      }
      const isValidPassword = compareHash(password, user.password);
      if (!isValidPassword) {
        return sendErrorResponse(res, 401, "Contraseña incorrecta");
      }
      const token = generateToken({
        user_id: user.id,
        user_role:  user.Role.user_role,
        user_name: user.name
      });
      
      sendSuccsessResponse(res, 200, {
        message: "Inicio de sesión de usuario exitoso",
        token: token,
        role: user.Role.user_role,
      });
    } catch (error) {
      sendErrorResponse(res, 500, "Inicio de sesión de usuario fallido", error);
    }
  };

module.exports = authController;
