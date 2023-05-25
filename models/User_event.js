"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_event extends Model {
    static associate(models) {

      User_event.belongsTo(models.User, {
        foreignKey: "user_id"
      })
      User_event.belongsTo(models.Event, {
        foreignKey: "event_id"
      })
    }
  }
  User_event.init(
    {
      user_id: DataTypes.INTEGER,
      event_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User_event",
      tableName: "users_events",
    }
  );
  return User_event;
};
