const { Sequelize } = require('sequelize');
const { config } = require('../../config/database_config.js');
require('./initialize_models');

const database = new Sequelize(config)

database.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((e) => console.error('Unable to connect to the database:', e))

module.exports = { database }