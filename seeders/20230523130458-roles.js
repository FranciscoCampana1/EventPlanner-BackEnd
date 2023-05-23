"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          user_role: "user",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          user_role: "admin",
          createdAt:new Date(),
          updatedAt:new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
