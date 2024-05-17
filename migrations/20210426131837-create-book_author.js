"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Book_authors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // BookId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "Books",
      //     key: "id",
      //   },
      //   allowNull: false,
      // },
      // AuthorId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "Authors",
      //     key: "id",
      //   },
      //   allowNull: false,
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Book_authors");
  },
};
