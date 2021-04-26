const db = require('../models');

const createFilm = async (req, res) => {
  const { poster, name, desc, description, stars } = req.body;

  try {
    const film = await db.Film.create({
      poster,
      name,
      desc,
      description,
      stars,
    });

    return res.json(film);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteFilm = async (req, res) => {
  const id = req.params.id;

  try {
    const filmId = await db.Film.findOne({ where: { id } });
    if (!filmId) {
      return res.json({ message: 'Фильм с этим id не найден' });
    }

    await db.Film.destroy({ where: { id } });

    return res.json({ message: 'Фильм успешно удален' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findFilms = async (req, res) => {
  try {
    const films = await db.Film.findAll({
      // where: { id: 3 },
      // attributes: { exclude: ['category'] },
      include: [
        db.Category,
        db.User,
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

    return res.json(films);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findFilm = async (req, res) => {
  const id = req.params.id;

  try {
    const filmId = await db.Film.findOne({ where: { id } });

    if (!filmId) {
      return res.json({ message: 'Фильм с этим id не найден' });
    }

    const film = await db.Film.findOne({ where: { id } });

    return res.json(film);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const putFilm = async (req, res) => {
  const id = req.params.id;
  const { poster, name, desc, description, stars } = req.body;

  try {
    const filmId = await db.Film.findOne({ where: { id } });
    if (!filmId) {
      return res.json({ message: 'Фильм с этим id не найден' });
    }

    await db.Film.update(
      {
        poster,
        name,
        desc,
        description,
        stars,
      },
      { where: { id } }
    );

    return res.json({ message: 'Фильм изменен' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  createFilm,
  deleteFilm,
  findFilms,
  findFilm,
  putFilm,
};
