"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {

      User.hasMany(models.Contact, {
        foreignKey: "user_id"
      })
      
      User.belongsTo(models.Role, {
        foreignKey: "role_id"
      });

      User.belongsToMany(models.Event, {
        through: "users_events",
        foreignKey: "user_id"
      })

      User.hasMany(models.Event, {
        foreignKey: "id"
      })
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
          min: 2,
        },
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
          min: 2,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 8,
        },
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
