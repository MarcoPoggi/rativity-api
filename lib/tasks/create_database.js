const { Client } = require("pg")
const { config } = require('../../config/database_config');

let { username, password, host } = config
const localPostgresUrl = `postgres://${username}:${password}@${host}/postgres`
const localClient = new Client(localPostgresUrl)

localClient.connect()
  .then(async () => {
    console.log(`Database connection stablished.`)

    try {
      await localClient.query(`CREATE DATABASE ${config.database}`)
      console.log(`database: ${config.database} created.`)
    } catch (e) {
      console.error(`database: ${config.database} already exists`)
    } finally {
      await localClient.end() //close postgres connection
    }
  })
  .catch((e) => {
    console.error(`Error trying to connect to the database: ${e.message}`)
  })
