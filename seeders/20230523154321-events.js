"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          title: "Cumpleaños Martín",
          description: "Iremos al campo a pasar todo el dia a comer y beber cosas ricas",
          date: "2023-04-20",
          time: "12:00:00",
          id_admin: 1,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          title: "Reencuentro Secundaria",
          description: "Nos encontramos en el bar de manolo, beberemos unas cañas ",
          date: "2023-11-20",
          time: "20:00:00",
          id_admin: 2,
          createdAt:new Date(),
          updatedAt:new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("events", null, {});
  },
};
