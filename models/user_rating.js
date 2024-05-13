"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_rating extends Model {
    static associate(models) {
      // define association here
    }
  }
  User_rating.init(
    {
      userId: DataTypes.INTEGER,
      ratingId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User_rating",
    }
  );
  return User_rating;
};
