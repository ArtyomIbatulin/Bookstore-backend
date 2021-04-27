'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Book }) {
      this.belongsTo(User);
      this.belongsTo(Book);
    }
  }
  Comment.init(
    {
      text: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        // allowNull: false,
        // validate: {
        //   isDate: true,
        // },
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
