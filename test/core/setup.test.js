const assert = require('assert');
const supertest = require('supertest')
const db = require("../../src/database/models/index")
const models = db.sequelize.models
const { server } = require('../../src/server')
const { createDatabase } = require("../helpers/database")

//test cases
describe('setup for testing', () => {
  //hooks
  before(async () => {
    await createDatabase()
  })

  after(async () => {
    await db.sequelize.sync({ force: true })
    await db.sequelize.close()
  })

  describe('enviroment', () => {
    it('should be in a test environment.', () => {
      assert.equal(process.env.NODE_ENV, 'test')
    });
  })

  describe('access to the database', () => {
    it('should be able to create any record in the database.', async () => {
      await models.User.create({
        username: "user_a",
        passwordEncrypted: "user_a_password",
        email: "user_a@gmail.com",
      })

      const totalUsers = await models.User.count();
      assert.equal(totalUsers, 1)
    })
  })

  describe('server requests', () => {
    it('should be respond with status 200 & text/html if /healtcheck', (done) => {
      supertest(server)
        .get('/healthcheck')
        .expect('Content-Type', /text\/html/)
        .expect(200, done)
    })

    it("should be respond with status 404 if routes doesn't exists", (done) => {
      supertest(server)
        .get('/random-route')
        .expect(404, done)
    })
  })
})
