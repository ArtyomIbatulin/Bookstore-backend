"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders_book extends Model {
    static associate(models) {
      // define association here
    }
  }
  Orders_book.init(
    {
      orderId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Orders_book",
    }
  );
  return Orders_book;
};
