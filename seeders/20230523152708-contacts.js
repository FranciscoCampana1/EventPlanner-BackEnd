"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "contacts",
      [
        {
          phone: "692556685",
          user_id: 1,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          phone: "74825685",
          user_id: 2,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          phone: "12345685",
          user_id: 3,
          createdAt:new Date(),
          updatedAt:new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("contacts", null, {});
  },
};
