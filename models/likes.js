"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    static associate({ Book, User }) {
      this.belongsToMany(Book, {
        through: "Orders_books",
      });
      this.belongsTo(User);
    }
  }
  Likes.init(
    {
      amount: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Likes",
    }
  );
  return Likes;
};
