const { Sequelize } = require('sequelize');
const { config } = require('../../config/enviroments_config');
require('./initialize_models');

const database = new Sequelize(config.database)

module.exports = { database }