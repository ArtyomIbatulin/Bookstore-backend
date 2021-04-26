'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
      modelName: 'User_rating',
    }
  );
  return User_rating;
};
