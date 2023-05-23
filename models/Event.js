'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    
    static associate(models) {
      
      Event.belongsToMany(models.User, {
        through: "users_events",
        foreignKey: "user_id"
      })
    }
  }
  Event.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events'
  });
  return Event;
};