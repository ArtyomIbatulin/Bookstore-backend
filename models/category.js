"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Book }) {
      this.belongsToMany(Book, {
        through: "Book_categories",
      });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
