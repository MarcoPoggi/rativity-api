const express = require('express');
const server = express();

server.port = process.env.PORT || 8080

server.get('/healthcheck', (req, res) => {
  res.send("Rativity API it's work")
})

module.exports = { server }