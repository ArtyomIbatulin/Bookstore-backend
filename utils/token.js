const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.SECRET_KEY, {
    expiresIn: "2h",
  });
};

const verifyToken = (token) => jwt.verify(token, process.env.SECRET_KEY);

module.exports = { generateToken, verifyToken };
