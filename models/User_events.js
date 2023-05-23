"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_events extends Model {
    static associate(models) {}
  }
  User_events.init(
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
  return User_events;
};
