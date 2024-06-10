"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ Book, User }) {
      this.hasMany(Book);
      this.belongsTo(User);
    }
  }
  Basket.init(
    {},
    {
      sequelize,
      modelName: "Basket",
    }
  );
  return Basket;
};
