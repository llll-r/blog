const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const path = require("path")
const home = require("./route/home")
const admin = require("./route/admin")

const app = express() 
const dateFormat = require("dateformat")
const template = require("art-template")

app.set("views", path.join(__dirname, "views"))

app.set("view engine", "html")
app.engine('html', require('express-art-template'));


app.use(session({secret:"secret key"}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, "public"))) 
template.defaults.imports.dateformat = dateFormat 
app.use("/admin", admin)
app.use("/admin", require("./middleware/loginGuard"))
app.use("/home", home)
// console.log(process.env);
const config = require("config")
console.log(config.get("title"));
app.listen(3000)
console.log("listening port");