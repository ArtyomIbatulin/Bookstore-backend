"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Basket_book extends Model {
    static associate(models) {
      // define association here
    }
  }
  Basket_book.init(
    {
      basketId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Basket_book",
    }
  );
  return Basket_book;
};
