'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diary extends Model {
    
    static associate(models) {
      Diary.belongsTo(models.User , {
        foreignKey: "user_id"
      })
      Diary.belongsTo(models.Contact , {
        foreignKey: "contact_id"
      })
    }
  }
  Diary.init({
    user_id: DataTypes.INTEGER,
    contact_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Diary',
    tableName: 'diarys'
  });
  return Diary;
};