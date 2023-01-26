// const { exec } = require('child_process');
const { server } = require('../../src/server');
const db = require("../../src/database/models/index")

module.exports = {
  database: db.sequelize, //current database
  server: server, //current server
  models: db.sequelize.models, //all database models
}