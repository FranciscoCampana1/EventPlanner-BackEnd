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
    title:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    time: {
      tpe: DataTypes.TIME,
      allowNull: false
    },
    id_admin:{
      type: DataTypes.INTEGER,
      allowNull: false,

    }
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events'
  });
  return Event;
};