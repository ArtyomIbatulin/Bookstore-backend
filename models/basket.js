"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ Book, User }) {
      this.belongsToMany(Book, {
        through: "Basket_book",
      });
      this.belongsTo(User);
    }
  }
  Basket.init(
    {
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Basket",
    }
  );
  return Basket;
};
