"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book_category extends Model {
    static associate({ Book, Category }) {
      // Определяем ассоциацию многие-ко-многим
      this.belongsTo(Book, {
        foreignKey: "bookId",
      });

      this.belongsTo(Category, {
        foreignKey: "categoryId",
      });
    }
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
