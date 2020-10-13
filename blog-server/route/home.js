const express = require("express")
const home = express.Router()

home.get("/default",require("./home/index"))
home.get("/article", require("./home/article"))





module.exports = home