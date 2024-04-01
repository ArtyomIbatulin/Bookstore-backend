const { verifyToken } = require("../utils/token");

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(401).json({ error: "Не авторизован" });
      }
      // const decoded = jwt.verify(token, process.env.SECRET_KEY);

      const decoded = verifyToken(token);

      if (decoded.role !== role) {
        return res.status(403).json({ error: "Нет доступа" });
      }

      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ error: "Не авторизован" });
    }
  };
};
