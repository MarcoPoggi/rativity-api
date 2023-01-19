const { Client } = require("pg")
const { config, enviroments_config } = require('../../config/enviroments_config');

const { username, password, host } = config.database
const [databaseTestName, databaseDevName] = [enviroments_config.test.database.database, enviroments_config.development.database.database]

const localPostgresUrl = `postgres://${username}:${password}@${host}/postgres`
const localClient = new Client(localPostgresUrl)

async function create_database(databaseName) {
  try {
    await localClient.query(`CREATE DATABASE ${databaseName}`)
    console.log(`database: ${databaseName} created.`)
  } catch (e) {
    console.error(`database: ${databaseName} already exists`)
  }
}

localClient.connect()
  .then(async () => {
    console.log(`PostgreSQL connection stablished.`)
    await create_database(databaseDevName)
    await create_database(databaseTestName)
  })
  .catch((e) => {
    console.error(`Error trying to connect to the database: ${e.message}`)
  })
  .finally(async () => {
    await localClient.end() //close postgres connection
    console.log(`PostgreSQL connection closed.`)
  })
