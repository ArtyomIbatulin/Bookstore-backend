"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    static associate({ User }) {
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
