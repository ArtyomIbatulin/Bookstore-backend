"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comment, Rating, Basket, Wishlist }) {
      this.hasMany(Comment, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      this.hasMany(Rating, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      this.hasOne(Basket, {
        as: "basket",
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      this.hasOne(Wishlist, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }
  User.init(
    {
      login: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("admin", "user"),
        defaultValue: "user",
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatarUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
