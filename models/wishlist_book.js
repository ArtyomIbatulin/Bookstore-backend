"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wishlist_book extends Model {
    static associate(models) {
      // define association here
    }
  }
  Wishlist_book.init(
    {
      wishlistId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Wishlist_book",
    }
  );
  return Wishlist_book;
};
