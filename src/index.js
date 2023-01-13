require("dotenv").config()

const server = require("express")()
const port = process.env.PORT || 3000

server.get('/healthcheck', (req, res) => {
  res.send("Rativity API it's work")
})

server.listen(port, () => {
  console.log(`Rativity API listeing on port ${port}`)
})