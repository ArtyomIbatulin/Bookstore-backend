const db = require("../models");

// переписать рейтинги

const createRating = async (req, res) => {
  const { rate, bookId } = req.body;
  const userId = req.user.id;

  if (!rate || !bookId) {
    return res.status(400).json({ error: "Введите рейтинг" });
  }

  try {
    const rating = await db.Rating.create({
      rate,
      BookId: bookId,
      UserId: userId,
    });

    return res.status(201).json(rating);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteRating = async (req, res) => {
  const id = req.params.id;

  try {
    const ratingId = await db.Rating.findOne({ where: { id } });
    if (!ratingId) {
      return res.json({ error: "Рейтинг с этим id не найден" });
    }

    await db.Rating.destroy({ where: { id } });

    return res.json({ message: "Рейтинг успешно удален" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findRatings = async (req, res) => {
  try {
    const ratings = await db.Rating.findAll({
      // attributes: { exclude: ['category'] },
      include: [db.User, db.Book],
    });

    return res.json(ratings);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findRating = async (req, res) => {
  const id = req.params.id;

  try {
    const ratingId = await db.Rating.findOne({ where: { id } });

    if (!ratingId) {
      return res.json({ error: "Рейтинг с этим id не найден" });
    }

    const rating = await db.Rating.findOne({ where: { id } });

    return res.json(rating);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const putRating = async (req, res) => {
  const id = req.params.id;
  const { rate } = req.body;

  try {
    const ratingId = await db.Rating.findOne({ where: { id } });
    if (!ratingId) {
      return res.json({ error: "Рейтинг с этим id не найден" });
    }

    await db.Rating.update(
      {
        rate,
      },
      { where: { id } }
    );

    return res.json({ message: "Рейтинг изменен" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  createRating,
  deleteRating,
  findRatings,
  findRating,
  putRating,
};
