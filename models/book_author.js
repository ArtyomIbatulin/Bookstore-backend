"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book_author extends Model {
    static associate(models) {
      // define association here
    }
  }
  Book_author.init(
    {
      bookId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book_author",
    }
  );
  return Book_author;
};
