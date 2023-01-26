# Rativity  

![production](https://github.com/MarcoPoggi/rativity-api/actions/workflows/production.yml/badge.svg?event=push)
![staging](https://github.com/MarcoPoggi/rativity-api/actions/workflows/staging.yml/badge.svg?event=push)

## Development  

#### Requirements:
- Postgres: https://www.postgresql.org/download/
- Node: https://nodejs.org/es/download/ (recommended V.18)

#### How to setup project:  
follow the steps below to work in a development environment
```bash
# package install
npm run ci

# create database & exec migrations(only firstime)
npm run db:create && npm run db:migrate

# run server in development mode
npm run dev
```

#### How to test project:
```bash
  #exec test/core
  npm test
```

#### .env example:  
You can change the values if you have a custom config.

```env
PORT=4000
SERVER_NAME=Rativity API #any

#DATABASE
PGDATABASE=rativity_development
PGPORT=5432
PGUSER=postgres
PGPASSWORD=postgres
PGHOST=localhost
```
