const { Sequelize } = require('sequelize');
const { config } = require('/config/database_config');

const database = new Sequelize(config)

database.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((e) => console.error('Unable to connect to the database:', e))

module.exports = { database }