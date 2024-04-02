const db = require("../models");
const bcrypt = require("bcrypt");
// может не задеплоиться из-за bcrypt, тогда bcryptjs
const { generateToken } = require("../utils/token");

const registration = async (req, res) => {
  const { login, password, role } = req.body;

  try {
    if (!login || !password) {
      return res.status(400).json({ error: "Нужно ввести поля" });
    }

    const candidate = await db.User.findOne({ where: { login } });

    if (candidate) {
      return res.status(400).json({ error: "Такой логин уже существует" });
    }

    const hashPassword = await bcrypt.hash(password, 5);

    // сделать рандомную аватарку

    const user = await db.User.create({
      login,
      password: hashPassword,
      role,
    });

    const token = generateToken(user.id, user.role);

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const login = async (req, res) => {
  const { login, password } = req.body;

  try {
    if (!login || !password) {
      return res.status(400).json({ error: "Нужно ввести поля" });
    }

    const user = await db.User.findOne({ where: { login } });
    if (!user) {
      return res.status(404).json({ error: "Неверный логин и/или пароль" });
    }

    // token, utils token & error/message 2:02
    // userSlice types

    let comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(400).json({ error: "Неверный логин и/или пароль" });
    }
    const token = generateToken(user.id, user.role);

    return res.json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const check = async (req, res) => {
  const token = generateToken(req.user.id);
  return res.json(token);
};

const getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll({
      include: [
        {
          model: db.Comment,
          model: db.Rating,
          model: db.Orders,
          //  { model: Category, where: { id: CategoryId } },
        },
      ],
    });

    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await db.User.findOne({
      where: { id },
    });

    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const editUser = async (req, res) => {
  const id = req.params.id;
  const { login } = req.body;

  try {
    const user = await db.User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    const existingLogin = await db.User.findOne({ where: { login } });

    if (existingLogin && user.id !== id) {
      return res.status(400).json({ error: "Такой логин уже занят" });
    }

    await db.User.update(
      {
        login: login || undefined,
      },
      { where: { id } }
    );

    return res.json({ message: "Пользователь изменен" });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const currentUser = async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: { id: req.user.id },
    });
    // +include

    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  registration,
  login,
  check,
  getUsers,
  getUserById,
  editUser,
  currentUser,
};

// register, login, getUserById, updateUser, current
// ulby, sequelize
// include сделать работающим !!!
// check ???
