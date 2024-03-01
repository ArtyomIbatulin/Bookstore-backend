const db = require("../models");

const createComment = async (req, res) => {
  const { text, date } = req.body;
  const userId = req.user.id;

  if (!text) {
    return res.status(400).json({ message: "Введите комментарий" });
  }

  try {
    const comment = await db.Comment.create({
      text,
      // автогенерация даты
      date: date || undefined,
      UserId: userId,
    });

    return res.status(201).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteComment = async (req, res) => {
  const id = req.params.id;

  try {
    const commentId = await db.Comment.findOne({ where: { id } });
    if (!commentId) {
      return res.json({ message: "Комментарий с этим id не найден" });
    }

    await db.Comment.destroy({ where: { id } });

    return res.json({ message: "Комментарий успешно удален" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findAllComments = async (req, res) => {
  try {
    const comments = await db.Comment.findAll({
      // attributes: { exclude: ['category'] },
      include: [db.User, db.Book],
    });

    return res.json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findCommentById = async (req, res) => {
  const id = req.params.id;

  try {
    const commentId = await db.Comment.findOne({ where: { id } });

    if (!commentId) {
      return res.json({ message: "Комментарий с этим id не найден" });
    }

    const comment = await db.Comment.findOne({ where: { id } });

    return res.json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const putComment = async (req, res) => {
  const id = req.params.id;
  const { text, date } = req.body;

  try {
    const commentId = await db.Comment.findOne({ where: { id } });
    if (!commentId) {
      return res.json({ message: "Комментарий с этим id не найден" });
    }

    await db.Comment.update(
      {
        text,
        date,
      },
      { where: { id } }
    );

    return res.json({ message: "Комментарий изменен" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  createComment,
  deleteComment,
  findAllComments,
  findCommentById,
  putComment,
};
