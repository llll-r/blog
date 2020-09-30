const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const path = require("path")
const home = require("./route/home")
const admin = require("./route/admin")

const app = express() 


app.set("views", path.join(__dirname, "views"))

app.set("view engine", "html")
app.engine('html', require('express-art-template'));


app.use(session({secret:"secret key"}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, "public"))) 

app.use("/home", home)
app.use("/admin", admin)
app.use("/admin", require("./middleware/loginGuard"))


app.listen(80)
console.log("listening port");