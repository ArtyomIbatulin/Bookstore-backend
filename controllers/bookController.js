const db = require('../models');
const Book = db.Book;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: books } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, books, totalPages, currentPage };
};

const pagBookfindAll = (req, res) => {
  const { page, size, title } = req.query;
  let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  const { limit, offset } = getPagination(page, size);

  Book.findAndCountAll({
    where: condition,
    limit,
    offset,
    include: [db.Author, db.Category, db.Rating],
    order: ['id'],
  })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || 'Some error occurred while retrieving books.',
      });
    });
};

// find all published Book
// exports.findAllPublished = (req, res) => {
//   const { page, size } = req.query;
//   const { limit, offset } = getPagination(page, size);

//   Book.findAndCountAll({ where: { published: true }, limit, offset })
//     .then(data => {
//       const response = getPagingData(data, page, limit);
//       res.send(response);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving books."
//       });
//     });
// };

const createBook = async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const book = await Book.create({
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
    const bookId = await Book.findOne({ where: { id } });
    if (!bookId) {
      return res.json({ message: 'Книга с этим id не найдена' });
    }

    await Book.destroy({ where: { id } });

    return res.json({ message: 'Книга успешно удалена' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
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

const findBook = async (req, res) => {
  const id = req.params.id;

  try {
    const bookId = await Book.findOne({ where: { id } });

    if (!bookId) {
      return res.json({ message: 'Книга с этим id не найдена' });
    }

    const book = await Book.findOne({ where: { id } });

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
    const bookId = await Book.findOne({ where: { id } });
    if (!bookId) {
      return res.json({ message: 'Книга с этим id не найдена' });
    }

    await Book.update(
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
  pagBookfindAll,
};
