'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate({ Book, User }) {
      this.belongsToMany(Book, {
        through: 'Book_ratings',
      });
      this.belongsToMany(User, {
        through: 'User_ratings',
      });
    }
  }
  Rating.init(
    {
      rate: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        // validate: {
        //   isNumeric: true,
        //   min: 0,
        //   max: 5,
        // },
      },
    },
    {
      sequelize,
      modelName: 'Rating',
    }
  );
  return Rating;
};
