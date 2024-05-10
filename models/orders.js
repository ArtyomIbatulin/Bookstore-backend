"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate({ Book, User }) {
      this.belongsToMany(Book, {
        through: "Orders_books",
      });
      this.belongsTo(User);
    }
  }
  Orders.init(
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
      modelName: "Orders",
    }
  );
  return Orders;
};
