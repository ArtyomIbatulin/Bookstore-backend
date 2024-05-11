"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({ Comment, Category, Author, Rating, Orders }) {
      this.hasMany(Comment);
      this.belongsToMany(Category, {
        through: "Book_categories",
      });
      this.belongsToMany(Author, {
        through: "Book_authors",
      });
      this.belongsToMany(Rating, {
        through: "Book_ratings",
      });
      this.belongsToMany(Orders, {
        through: "Orders_books",
      });
    }
  }
  Book.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      img: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
