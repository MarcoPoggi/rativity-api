const assert = require('assert');
const supertest = require('supertest')
const { server } = require("./test_helpers/services")
const { testname } = require("./test_helpers/utils");

//test cases
describe(testname(__dirname, __filename), () => {
  it('should be in a test environment.', () => {
    assert.equal(process.env.NODE_ENV, 'test')
  });

  it('should be respond with status 200 & text/html if route match with /healtcheck', (done) => {
    supertest(server)
      .get('/healthcheck')
      .expect('Content-Type', /text\/html/)
      .expect(200, done)
  })
})
