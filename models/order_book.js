"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order_book extends Model {
    static associate(models) {
      // define association here
    }
  }
  Order_book.init(
    {
      orderId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order_book",
    }
  );
  return Order_book;
};
