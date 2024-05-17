"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comment, Rating, Orders, Wishlist }) {
      this.hasMany(Comment);
      this.belongsToMany(Rating, {
        through: "User_ratings",
      });
      this.hasOne(Orders);
      this.hasOne(Wishlist);
    }
  }
  User.init(
    {
      login: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { unique: true, len: [2, 16] },
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
        allowNull: true,
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
