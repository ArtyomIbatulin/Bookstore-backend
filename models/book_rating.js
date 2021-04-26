'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book_rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book_rating.init(
    {
      bookId: DataTypes.INTEGER,
      ratingId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Book_rating',
    }
  );
  return Book_rating;
};
