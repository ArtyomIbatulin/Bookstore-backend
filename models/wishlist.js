"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    static associate({ Book, User }) {
      this.hasMany(Book);
      this.belongsTo(User);
    }
  }
  Wishlist.init(
    {},
    {
      sequelize,
      modelName: "Wishlist",
    }
  );
  return Wishlist;
};
