'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    
    static associate(models) {

      Contact.belongsTo(models.User, {
        foreignKey:"user_id"
      })

      Contact.belongsToMany(models.User, {
        through: "diarys",
        foreignKey: "contact_id"
      })

    }
  }

  Contact.init({
    user_id:{
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Contact',
    tableName: 'contacts'
  });
  return Contact;
};