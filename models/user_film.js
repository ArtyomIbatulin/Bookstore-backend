'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_film.init(
    {
      userId: DataTypes.INTEGER,
      filmId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User_film',
    }
  );
  return User_film;
};
