const ENV = process.env.NODE_ENV

const DATABASE_DEFAULT = {
  username: process.env.PGUSER || process.env.POSTGRES_USER || "postgres",
  password: process.env.PGPASSWORD || process.env.POSTGRES_PASSWORD || "",
  host: process.env.PGHOST || process.env.POSTGRES_HOST ||"localhost",
  port: process.env.PGPORT || process.env.POSTGRES_PORT || 5432,
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
      database: 'postgres',
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