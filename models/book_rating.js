"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book_rating extends Model {
    static associate(models) {
      // define association here
    }
  }
  Book_rating.init(
    {
      bookId: DataTypes.INTEGER,
      ratingId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book_rating",
    }
  );
  return Book_rating;
};
