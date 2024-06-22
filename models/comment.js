"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Book }) {
      this.belongsTo(User);
      this.belongsTo(Book);
    }
  }
  Comment.init(
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};

/* 
Comments.belongsTo(Books, {
  foreignKey: 'BookId',
  onDelete: 'CASCADE'
});
*/
