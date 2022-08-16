require("dotenv").config()

const express = require("express")
const cors = require("cors")

const liderRoutes = require("./routes/lider.routes.js")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("Hello Developer!")
})

app.use("/", liderRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log("server is running, port: " + port);
})