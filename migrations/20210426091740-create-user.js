'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      login: {
        type: Sequelize.STRING,
        // allowNull: false,
        // validate: { unique: true, len: [2, 16] },
      },
      password: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      role: {
        type: Sequelize.ENUM('admin', 'user'),
        defaultValue: 'user',
      },
      avatar: {
        type: Sequelize.STRING,
      },
      // Comments: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Comments',
      //     key: 'id',
      //   },
      //   allowNull: false,
      // },
      Orders: {
        // ???
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
        onDelete: 'CASCADE',
        // allowNull: false,
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
    await queryInterface.dropTable('Users');
  },
};
