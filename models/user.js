"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comment, Rating, Basket, Wishlist }) {
      this.hasMany(Comment);
      this.hasMany(Rating);
      this.hasOne(Basket, {
        onDelete: "CASCADE ",
      });
      this.hasOne(Wishlist);
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

// login - validate, constraint, not
// delete cascade
// validate: { unique: true, len: [2, 16] },
