process.env.NODE_ENV = 'test'

const request = require('supertest');
const { server, database } = require("../config/server_config");

const server_on = server.listen(server.port, () => console.log(`${server.name} listeing on port ${server.port}.`))

before(async () => {
  await database.sync({ force: true })
})

describe('Trying Test Runner', () => {
  describe("GET /healthcheck", () => {
    it("Responds with 200", () => {
      request(server)
        .get('/healthcheck')
        .expect('Content-type', /text\/html/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
        })
    })
  })
})

after(async () => {
  server_on.close(() => console.log("server close..."));
  await database.close()
})