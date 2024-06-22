"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book_author extends Model {
    static associate(models) {
      // define association here
    }
  }
  Book_author.init(
    {
      bookId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book_author",
    }
  );
  return Book_author;
};

/*
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book_author extends Model {
    static associate({ Book, Author }) {
      // Определяем ассоциацию многие-ко-многим
      this.belongsTo(Book, {
        foreignKey: 'bookId',
        as: 'book',
      });
      
      this.belongsTo(Author, {
        foreignKey: 'authorId',
        as: 'author',
      });
    }
  }
  Book_author.init(
    {
      bookId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book_author",
    }
  );
  return Book_author;
};
*/
