const sequelize = require('../db');

const health = async (req, res) => {
  try {
    await sequelize.authenticate();

    res.send('OK');
  } catch (error) {
    res.status(500).send(`Error ${error}`);
  }
};

module.exports = { health };
