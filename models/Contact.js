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
    }
  }

  Contact.init({
    phone:{
      type: DataTypes.INTEGER,
      validate: {
        min: 8,
        max:15,
        unique: true
      }
    },
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