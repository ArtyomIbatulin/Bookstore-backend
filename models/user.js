'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment, Rating, Orders }) {
      this.hasMany(Comment);
      this.belongsToMany(Rating, {
        through: 'User_ratings',
      });
      this.hasOne(Orders);
    }
  }
  User.init(
    {
      login: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: { unique: true, len: [2, 16] },
      },
      password: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user',
      },
      avatar: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
