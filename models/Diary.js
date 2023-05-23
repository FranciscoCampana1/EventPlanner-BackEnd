'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diary extends Model {
  
    static associate(models) {
      Diary.hasOne(models.User, {
        foreignKey: "user_id"
      });

      Diary.hasMany(models.Contact, {
        foreignKey
      })

    }
  }
  Diary.init({
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Diary',
    tableName: 'diarys'
  });
  return Diary;
};