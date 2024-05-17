"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Basket_books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      basketId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Basket",
          key: "id",
        },
        allowNull: false,
      },
      bookId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Book",
          key: "id",
        },
        allowNull: false,
      },
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
    await queryInterface.dropTable("Basket_books");
  },
};
