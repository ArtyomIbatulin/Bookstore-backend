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
