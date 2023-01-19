require("dotenv").config()

const { config } = require('./enviroments_config')
const { database } = require("../src/database/database");

const express = require('express')
const server = express();

server.port = config.server.port
server.name = config.server.name

server.get('/healthcheck', (req, res) => {
  res.send("Rativity API it's work")
})

module.exports = { server, database }