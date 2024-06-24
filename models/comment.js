"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Book }) {
      this.belongsTo(User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      this.belongsTo(Book, {
        foreignKey: "bookId",
        onDelete: "CASCADE",
      });
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
  foreignKey: 'bookId',
  onDelete: 'CASCADE'
});
*/
