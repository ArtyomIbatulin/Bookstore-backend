"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      img: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      WishlistId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Wishlists",
          key: "id",
        },
        allowNull: false,
      },

      BasketId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Baskets",
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
    await queryInterface.dropTable("Books");
  },
};
