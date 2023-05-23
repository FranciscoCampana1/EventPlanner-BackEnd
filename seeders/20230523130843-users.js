"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John",
          surname:"Doe",
          email:"jhon@gmail.com",
          password:"12345678",
          role_id: 1,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: "Francisco",
          surname:"Campana",
          email:"francisco@gmail.com",
          password:"12345678",
          role_id: 2,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: "Sebastian",
          surname:"Marchin",
          email:"sebastian@gmail.com",
          password:"12345678",
          role_id: 1,
          createdAt:new Date(),
          updatedAt:new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
