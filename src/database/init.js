const CURRENT_ENVIROMENT = process.env.NODE_ENV

const { Sequelize } = require('sequelize');
const { Client } = require("pg")
const { config } = require('./config');


//create database (test/dev) if don't exists.
if (CURRENT_ENVIROMENT === 'development' || CURRENT_ENVIROMENT === 'test') {
  let { username, password, host } = config
  let localPostgresUrl = `postgres://${username}:${password}@${host}/postgres`
  let localClient = new Client(localPostgresUrl)

  localClient.connect() //connect db

  localClient.query(`CREATE DATABASE ${config.database}`, (error) => {
    error
      ? console.log(`database: ${config.database} already exists`)
      : console.log(`database: ${config.database} created`)

    localClient.end() //close postgres connection
  })
}

const database = new Sequelize(config)

database.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((e) => console.error('Unable to connect to the database:', e))

module.exports = { database }