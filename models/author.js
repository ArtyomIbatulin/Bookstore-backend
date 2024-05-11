"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate({ Book }) {
      this.belongsToMany(Book, {
        through: "Book_authors",
      });
    }
  }
  Author.init(
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Author",
    }
  );
  return Author;
};
