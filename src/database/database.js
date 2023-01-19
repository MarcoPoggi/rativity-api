const { Sequelize } = require('sequelize');
const { config } = require('../../config/enviroments_config');
require('./initialize_models');

const database = new Sequelize(config.database)

database.authenticate().
  then(() => console.log("database user authenticated."))
  .catch((e) => console.error("authentication error: ", e.message))

module.exports = { database }