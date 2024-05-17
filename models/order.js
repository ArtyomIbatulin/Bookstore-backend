"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ Book, User }) {
      this.belongsToMany(Book, {
        through: "Order_book",
      });
      this.belongsTo(User);
    }
  }
  Order.init(
    {
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
