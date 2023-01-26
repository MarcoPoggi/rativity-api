require("dotenv").config()

const db = require("./database/models");
const { server } = require("./server");

db.sequelize.authenticate()
  .then(() => {
    console.log("Database authenticated.")
    server.listen(server.port, () => console.log(`Server on port ${server.port}`));
  })
  .catch((e) => console.error(`An error occurred while trying to authenticate to the database:\n${e.message}`))