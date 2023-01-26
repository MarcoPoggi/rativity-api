const assert = require('assert');
const { database, models } = require("../test_helpers/services")
const { testname, loadFakeData } = require("../test_helpers/utils")

describe(testname(__dirname, __filename), () => {
  const users_data = loadFakeData('users') // test/test_data/users.json
  const { User } = models

  afterEach(async () => {
    await database.sync({ force: true })
  })

  describe('- user create:', () => {
    it("should can be able to create a user with valid data(username, email, password)", async () => {
      await User.create(users_data.user_data_valid)
      assert.equal(await User.count(), 1)
    })

    it("should can't be able to create a user with invalid data(username, email, password)", async () => {
      await assert.rejects(async () => await User.create(users_data.user_data_invalid))
      assert.equal(await User.count(), 0)
    })
  })

  describe('- user update:', () => {
    it("should can be able to update a existent user with valid data(username, email, password)", async () => {
      const user = await User.create(users_data.user_data_valid)
      assert.equal(user.username, users_data.user_data_valid.username)

      const user_updated = await user.update({ username: "validusername", password: "ValidPass123", email: "validemail@gmail.com" })
      assert.equal(user_updated.username, "validusername")

      assert.equal(await User.count(), 1)
    })

    it("should can't be able to update a existent user with invalid data(username, email, password)", async () => {
      const user = await User.create(users_data.user_data_valid)
      assert.equal(user.username, users_data.user_data_valid.username)

      await assert.rejects(async () => await user.update(users_data.user_data_invalid))

      await user.reload()
      assert.equal(user.username, users_data.user_data_valid.username)
      assert.equal(await User.count(), 1)
    })
  })

  describe('- validations:', () => {

    describe('> username', () => {
      it.skip('validate username format!', () => { })

      it("should can't be able to create a user with invalid username(empty)", async () => {
        await assert.rejects(async () => await User.create(users_data.user_data_invalid_empty_username))
        assert.equal(await User.count(), 0)
      })

      it("should can't be able to create a user with invalid username(null)", async () => {
        await assert.rejects(async () => await User.create(users_data.user_data_invalid_null_username))
        assert.equal(await User.count(), 0)
      })
    })

    describe('> email', () => {
      it("should can't be able to create a user with invalid email(null)", async () => {
        await assert.rejects(async () => await User.create(users_data.user_data_invalid_null_email))
        assert.equal(await User.count(), 0)
      })

      it("should can't be able to create a user with invalid email(format)", async () => {
        await assert.rejects(async () => await User.create(users_data.user_data_invalid_format_email))
        assert.equal(await User.count(), 0)
      })

      it("should can't be able to create a user with invalid email(already exists)", async () => {
        await User.create(users_data.user_data_valid)
        await assert.rejects(async () => await User.create(users_data.user_data_invalid_duplicated_email))

        assert.equal(await User.count(), 1)
      })
    })

    describe('> avatar', () => {
      it("should can be able to create a user without avatar(null)", async () => {
        await User.create({ ...users_data.user_data_valid, avatar: null })
        assert.equal(await User.count(), 1)
      })

      it("should can't be able to create a user with invalid avatar(format)", async () => {
        await assert.rejects(async () => await User.create(users_data.user_data_invalid_format_avatar))
        assert.equal(await User.count(), 0)
      })
    })

    describe('> password', () => {
      it("should can't be able to create a user without password(null)", async () => {
        await assert.rejects(async () => await User.create(users_data.user_data_invalid_null_password))
        assert.equal(await User.count(), 0)
      })

      it("should can't be able to create a user with invalid password(format)", async () => {
        await assert.rejects(async () => await User.create(users_data.user_data_invalid_format_password))
        await assert.rejects(async () => await User.create(users_data.user_data_invalid_format_password_b))
        await assert.rejects(async () => await User.create(users_data.user_data_invalid_format_password_c))
        assert.equal(await User.count(), 0)
      })

      it.skip("validate encrypted password!", async () => {
        await assert.rejects(async () => await User.create(users_data.user_data_invalid_null_password))
        assert.equal(await User.count(), 0)
      })
    })
  })
})
