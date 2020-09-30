const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const path = require("path")
const home = require("./route/home")
const admin = require("./route/admin")

const app = express() 
require("./model/connect")
require("./model/user")
app.set("views", path.join(__dirname, "views"))

app.set("view engine", "html")
app.engine('html', require('express-art-template'));


app.use(session({secret:"secret key"}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, "public"))) 
app.use("/admin", require("./middleware/loginGuard"))
app.use("/home", home)
app.use("/admin", admin)



app.listen(80)
console.log("listening port");