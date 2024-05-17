"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book_category extends Model {
    static associate(models) {}
  }
  Book_category.init(
    {
      bookId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book_category",
    }
  );
  return Book_category;
};

//  modelName: "Book_categories", ???
