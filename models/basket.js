"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ Book, User }) {
      this.hasMany(Book, {
        foreignKey: "basketId",
        onDelete: "CASCADE",
      });
      this.belongsTo(User, {
        onDelete: "CASCADE",
        foreignKey: "userId",
        allowNull: false,
      });
      this.belongsTo(User, {
        onDelete: "CASCADE",
        foreignKey: "userId",
        allowNull: false,
      });
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
