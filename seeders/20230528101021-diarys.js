"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "diarys",
      [
        {
          user_id:1,
          contact_id: 2,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          user_id:1,
          contact_id: 3,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          user_id:2,
          contact_id: 1,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          user_id:2,
          contact_id: 3,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          user_id:3,
          contact_id: 1,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          user_id:3,
          contact_id: 2,
          createdAt:new Date(),
          updatedAt:new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("diarys", null, {});
  },
};
