const Sequelize = require('sequelize');

const connection = new Sequelize('guiaPerguntas', 'root', '[DB_PASSWORD_HERE]', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;