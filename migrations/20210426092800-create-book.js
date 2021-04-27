'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        // validate: {
        //   isNumeric: true,
        // },
      },
      description: {
        type: Sequelize.STRING,
      },
      // author: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      // },
      // category: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      // },
      // Comments: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Comments',
      //     key: 'id',
      //   },
      //   allowNull: false,
      // },
      // rating: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   validate: {
      //     isNumeric: true,
      //     min: 0,
      //     max: 5,
      //   },
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
    await queryInterface.dropTable('Books');
  },
};
