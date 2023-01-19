const ENV = process.env.NODE_ENV

const DATABASE_DEFAULT = {
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  dialect: "postgres",
  logging: false,
  native: false
}

const ENVIROMENTS_CONFIG = {
  development: {
    server: {
      port: process.env.PORT_DEV || 3000,
      name: process.env.SERVER_NAME || "app"
    },
    database: {
      database: 'rativity_development',
      ...DATABASE_DEFAULT,
    }
  },
  test: {
    server: {
      port: process.env.PORT_TEST || 3001,
      name: process.env.SERVER_NAME || "app"
    },
    database: {
      database: 'rativity_test',
      ...DATABASE_DEFAULT,
    }

  },
  production: {
    server: {
      port: process.env.PORT,
      name: process.env.SERVER_NAME || "app"
    },
    database: {
      database: process.env.PGDATABASE,
      ...DATABASE_DEFAULT,
    }
  },
}

module.exports = { config: ENVIROMENTS_CONFIG[ENV], enviroments_config: ENVIROMENTS_CONFIG } 