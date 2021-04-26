'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({ Comment, Category, Author, Rating, Orders }) {
      this.hasMany(Comment);
      this.belongsToMany(Category, {
        through: 'Book_categories',
      });
      this.belongsToMany(Author, {
        through: 'Book_authors',
      });
      this.belongsToMany(Rating, {
        through: 'Book_ratings',
      });
      this.belongsToMany(Orders, {
        through: 'Orders_books',
      });
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
      },
      // author: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // category: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // rating: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   validate: {
      //     isNumeric: true,
      //     min: 0,
      //     max: 5,
      //   },
      // },
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
