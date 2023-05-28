const authController = {};
const { User, Role, Contact} = require("../models");
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
      phone,
    } = req.body;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const newUser = await User.create({
      name: name,
      surname: surname,
      email: email,
      password: encryptedPassword,
      phone: phone,
      role_id: 1,
    });

    const newContact = await Contact.create({
      user_id: newUser.id,
    })

    return sendSuccsessResponse(res, 200, {
      message: "User create successfully"
    });
  } catch (error) {
    return sendErrorResponse(res, 500, "Something went wrong", error);
  }
};

authController.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return sendErrorResponse(
        res,
        400,
        "You must fill in the required fields correctly"
      );
    }
    try {
      const user = await User.findOne({ where: { email: email }, include: [{
        model: Role,
      }] });
      if (!user) {
        return sendErrorResponse(res, 404, "Email doesen't exist");
      }
      const isValidPassword = compareHash(password, user.password);
      if (!isValidPassword) {
        return sendErrorResponse(res, 401, "Incorrected password");
      }
      const token = generateToken({
        user_id: user.id,
        user_role:  user.Role.user_role,
        user_name: user.name
      });
      
      sendSuccsessResponse(res, 200, {
        message: "User login successful",
        token: token,
        role: user.Role.user_role,
      });
    } catch (error) {
      sendErrorResponse(res, 500, "User login failed", error);
    }
  };

module.exports = authController;
