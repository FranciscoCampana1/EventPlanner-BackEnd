const userController = {};
const { User, Diary, Contact } = require("../models");
const { getPagesFromCountLimit, normalizePage } = require("../_util/util");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");

//CONTROLADOR PARA VER TODOS LOS USUARIOS REGISTRADOS (SOLO SI ES ADMIN PUEDE VER LOS PACIENTES)
userController.getAll = async (req, res) => {
  let { page } = req.query;
  LIMIT = 4;
  try {
    const count = await User.count();
    const pages = getPagesFromCountLimit(count, LIMIT);
    page = normalizePage(page, pages);
    const users = await User.findAll({
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
      attributes: { exclude: ["password"] },
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


userController.getProfile = async (req, res) =>{
  try {
    const {user_id} = req
   const profile = await User.findOne({where : {id : user_id}, attributes: {exclude:["id", "password", "createdAt", "updatedAt", "role_id"]}})
   sendSuccsessResponse(res, 200, profile)
  } catch (error) {
   sendErrorResponse(res, 404, "Id not found", error)
  }
 };

 userController.getMyContacts = async (req, res) => {
  try {
    const user = await Contact.findOne({
      where: { user_id: req.user_id },
    });
    const contactDiary = await Diary.findAll({
      where: { user_id: user.id },
      attributes: { exclude: ["createdAt", "updatedAt","id", "user_id"] },
      include:{
        model: Contact,
        attributes:{
          exclude: ["createdAt", "updatedAt","id", ]
        },
        include:{
          model:User,
          attributes:{
            exclude: ["createdAt", "updatedAt","id","password", "role_id"]
          }
        }
      }
    });

    if (contactDiary == 0) {
      return sendErrorResponse(res, 404, "Don't have a contact's");
    } else {
      return sendSuccsessResponse(res, 200, {
        message: "Yours contacts",
        Contacts: contactDiary,
      });
    }
  } catch (error) {
    return sendErrorResponse(res, 500, "Failed to retrive contacts", error);
  }
};

userController.createContact = async (req, res) => {
  try {
    const {phone} = req.body;
  
    const user = await User.findOne({
      where: {phone: phone}
    })
  
    const newDiaryContact = await Diary.create({
      user_id: req.user_id,
      contact_id: user.id
    })
  
    return sendSuccsessResponse(res, 200, {
      message: "Contact create successfully"
    });
  } catch (error) {
    return sendErrorResponse(res, 500, "Something went wrong", error);
  }
};



module.exports = userController;
