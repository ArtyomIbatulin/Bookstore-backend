"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comment, Rating, Orders, Likes }) {
      this.hasMany(Comment);
      this.belongsToMany(Rating, {
        through: "User_ratings",
      });
      this.hasOne(Orders);
      this.hasOne(Likes);
    }
  }
  User.init(
    {
      login: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.ENUM("admin", "user"),
        defaultValue: "user",
      },
      name: {
        type: DataTypes.STRING,
      },
      avatarUrl: {
        type: DataTypes.STRING,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
      },
      location: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
