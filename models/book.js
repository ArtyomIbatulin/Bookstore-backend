"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({ Comment, Category, Author, Rating, Wishlist, Basket }) {
      this.hasMany(Comment);
      this.belongsTo(Wishlist);
      this.belongsTo(Basket);
      this.belongsToMany(Category, {
        through: "Book_categories",
      });
      this.belongsToMany(Author, {
        through: "Book_authors",
      });
      this.hasMany(Rating);
    }
  }
  Book.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
