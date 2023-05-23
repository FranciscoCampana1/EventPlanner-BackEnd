"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users_events",
      [
        {
          user_id:1,
          event_id:1,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          user_id:1,
          event_id:2,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          user_id:2,
          event_id:1,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          user_id:2,
          event_id:2,
          createdAt:new Date(),
          updatedAt:new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users_events", null, {});
  },
};
