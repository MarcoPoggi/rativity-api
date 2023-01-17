require("dotenv").config()
const { database } = require("./database/database.js")

const server = require("express")()
const port = process.env.PORT || 3000

server.get('/healthcheck', (req, res) => {
  res.send("Rativity API it's work")
})


database.sync({ force: true })
  .then(() => {
    server.listen(port, () => {
      console.log(`Rativity API listeing on port ${port}`)
    })
  })
  .catch((e) => {
    console.error(e.message)
  })