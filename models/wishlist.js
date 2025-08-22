"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    static associate({ Book, User }) {
      this.hasMany(Book, {
        foreignKey: "wishlistId",
        onDelete: "CASCADE",
      });
      this.belongsTo(User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }
  Wishlist.init(
    {
      // Добавляем id как первичный ключ
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Wishlist",
    }
  );
  return Wishlist;
};
