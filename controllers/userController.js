const db = require("../models");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");

const registration = async (req, res) => {
  const { login, password, role } = req.body;

  try {
    console.log("Body", req.body);

    const candidate = await db.User.findOne({ where: { login } });

    if (candidate) {
      return res.status(400).json({ message: "Такой логин уже существует" });
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const user = await db.User.create({
      login,
      password: hashPassword,
      role,
    });

    const token = generateToken(user.id);

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  const { login, password } = req.body;
  const user = await db.User.findOne({ where: { login } });
  if (!user) {
    return res.status(400).json({ message: "Пользователь не найден" });
  }

  let comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    return res.status(400).json({ message: "Пароль неверен" });
  }
  const token = generateToken(user.id);

  return res.json(token);
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
        },
      ],
    });

    return res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  registration,
  login,
  check,
  getUsers,
};
