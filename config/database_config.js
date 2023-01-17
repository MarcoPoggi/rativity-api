const credentials = {
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  dialect: "postgres",
  logging: false, 
  native: false 
}

const enviroments = {
  development: {
    database: 'rativity_development',
    ...credentials,
  },
  test: {
    database: 'rativity_test',
    ...credentials,
  },
  production: {
    database: process.env.PGDATABASE,
    ...credentials
  }
}

module.exports = { config: enviroments[process.env.NODE_ENV] }