"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    static associate({ Book, User }) {
      this.belongsToMany(Book, {
        through: "Wishlist_book",
      });
      this.belongsTo(User);
    }
  }
  Wishlist.init(
    {
      like: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Wishlist",
    }
  );
  return Wishlist;
};
