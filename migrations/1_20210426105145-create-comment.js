'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      text: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        // allowNull: false,
        // validate: {
        //   isDate: true,
        // },
      },
      // UserId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Users',
      //     key: 'id',
      //   },
      //   allowNull: false,
      // },
      // BookId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Books',
      //     key: 'id',
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
    await queryInterface.dropTable('Comments');
  },
};
