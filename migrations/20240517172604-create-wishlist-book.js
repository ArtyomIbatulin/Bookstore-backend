"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Wishlist_books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      wishlistId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Wishlist",
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
    await queryInterface.dropTable("Wishlist_books");
  },
};
