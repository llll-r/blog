const express = require("express")
const { User } = require("../model/user")
const bcrypt = require("bcrypt")
const admin = express.Router()

//登录请求
admin.get("/login", require("./admin/login"))

//
admin.get("/article", (req, res) => {
    res.render("admin/article")
})

//请求用户管理页面
admin.post("/user", require("./admin/user"))


admin.get("/user", (req, res) => {
    res.render("admin/user")
})
module.exports = admin