const db = require('../models');

const createBook = async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const book = await db.Book.create({
      name,
      price,
      description,
    });

    return res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteBook = async (req, res) => {
  const id = req.params.id;

  try {
    const bookId = await db.Book.findOne({ where: { id } });
    if (!bookId) {
      return res.json({ message: 'Книга с этим id не найдена' });
    }

    await db.Book.destroy({ where: { id } });

    return res.json({ message: 'Книга успешно удалена' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findBooks = async (req, res) => {
  try {
    const books = await db.Book.findAll({
      // attributes: { exclude: ['category'] },
      include: [
        db.Author,
        db.Category,
        db.Rating,
        // {
        //   model: db.Category,
        //   attributes: ['name'],
        // },
        // {
        //   model: db.User,
        // as: 'users',

        // attributes: ['login', 'isAdmin'],
        // through: {
        //   attributes: [],
        // },
        // },
      ],
    });

    return res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const paginExampBooks = async (req, res) => {
  try {
    const books = await db.Book.findAndCountAll({
      limit: 2,
      offset: 3,
      // attributes: { exclude: ['category'] },
      include: [db.Author, db.Category, db.Rating],
    });

    return res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findBook = async (req, res) => {
  const id = req.params.id;

  try {
    const bookId = await db.Book.findOne({ where: { id } });

    if (!bookId) {
      return res.json({ message: 'Книга с этим id не найдена' });
    }

    const book = await db.Book.findOne({ where: { id } });

    return res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const putBook = async (req, res) => {
  const id = req.params.id;
  const { name, price, description } = req.body;

  try {
    const bookId = await db.Book.findOne({ where: { id } });
    if (!bookId) {
      return res.json({ message: 'Книга с этим id не найдена' });
    }

    await db.Book.update(
      {
        name,
        price,
        description,
      },
      { where: { id } }
    );

    return res.json({ message: 'Книга изменена' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  createBook,
  deleteBook,
  findBooks,
  findBook,
  putBook,
  paginExampBooks,
};
