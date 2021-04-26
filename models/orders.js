'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Book, User }) {
      this.belongsToMany(Book, {
        through: 'Orders_books',
      });
      this.belongsTo(User);
    }
  }
  Orders.init(
    {
      // userId: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // bookId: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Orders',
    }
  );
  return Orders;
};
