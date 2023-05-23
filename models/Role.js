'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    
    static associate(models) {
      Role.hasMany(models.User,{
        foreignKey: "role_id",
      })
    }
  }

  Role.init({
    user_role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles'
  });
  return Role;
};