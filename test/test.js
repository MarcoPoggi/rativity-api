process.env.NODE_ENV = 'test'

const request = require('supertest');
const assert = require('assert');
const { server, database } = require("../config/server_config");

before((done) => {
  database.sync({ force: true, match: /(_test$|_development)$/ })
    .then(() => done())
    .catch((e) => done(e))
})

describe('Trying Test Runner', () => {
  describe("GET /healthcheck", () => {
    it("Responds with 200", () => {
      request(server)
        .get('/healthcheck')
        .expect('Content-type', /text-plain/)
        .expect(200)
        .then((response) => {
          assert.equal(response.body, "Rativity API it's work")
        })
    })
  })
})