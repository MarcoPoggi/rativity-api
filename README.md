# Rativity  

![production](https://github.com/MarcoPoggi/rativity-api/actions/workflows/production.yml/badge.svg?event=push)
![staging](https://github.com/MarcoPoggi/rativity-api/actions/workflows/staging.yml/badge.svg?event=push)

## Development  
#### How to setup project:  
follow the steps below to work in a development environment
```bash
# package install
npm run i # or npm run install, or npm run ci

# exec automatic tasks(create databases, etc.)
npm run tasks # only first time

# run server in development mode
npm run dev
  
```

#### .env example:  
You can change the values if you have a custom config.

```env
NODE_ENV=development
PORT=4000
PORT_TEST=4001
SERVER_NAME=Rativity API

#DATABASE
PGPORT=5432
PGUSER=postgres
PGPASSWORD=postgres
PGHOST=localhost
```
