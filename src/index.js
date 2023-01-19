const { server, database } = require("../config/server_config");

database.sync({ force: true, match: /(_test$|_development)$/ })
  .then(() => server.listen(server.port, () => console.log(`${server.name} listeing on port ${server.port}.`)))
  .catch((e) => console.error("Database sync error: ", e.message))