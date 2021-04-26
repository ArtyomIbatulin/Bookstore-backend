'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, User }) {
      // define association here
      this.belongsTo(Category, {
        foreignKey: 'category',
      });
      this.belongsToMany(User, {
        through: 'user_film',
        // as: 'user',
        // foreignKey: 'filmId',
      });
    }
  }
  Film.init(
    {
      poster: DataTypes.STRING,
      name: DataTypes.STRING,
      desc: DataTypes.STRING,
      description: DataTypes.STRING,
      stars: DataTypes.INTEGER,
      category: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Film',
    }
  );
  return Film;
};
