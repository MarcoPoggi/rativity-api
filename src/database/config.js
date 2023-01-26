require('dotenv').config()

const DATABASE_DEFAULT_VALUES = {
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST || '127.0.0.1',
  port: process.env.PGPORT,
  dialect: "postgres",
  logging: false,
  native: false,
  pool: {
    max: 5,
    min: 0,
  }
}

module.exports = {
  development: {
    ...DATABASE_DEFAULT_VALUES,
  },
  test: {
    ...DATABASE_DEFAULT_VALUES,
    database: 'rativity_test',
  },
  production: {
    ...DATABASE_DEFAULT_VALUES,
  }
};