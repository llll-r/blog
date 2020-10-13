const express = require("express")
const { User } = require("../model/user")
const bcrypt = require("bcrypt")
const admin = express.Router()

//渲染登录页面
admin.get("/login", require("./admin/loginPage"))

//渲染文章页面
admin.get("/article", require("./admin/articlePage"))

//用户管理功能
admin.post("/user", require("./admin/user"))

//渲染用户页面
admin.get("/user", require("./admin/userPage"))

//渲染新增用户页面
admin.get("/user-edit", require("./admin/user-editPage"))

//实现修改用户信息功能
admin.post("/user-edit", require("./admin/user-edit"))

//实现添加用户信息功能
admin.post("/user-add", require("./admin/user-add"))


//渲染修改文章页面
admin.get("/article-edit", require("./admin/article-editPage"))

//文章修改功能
admin.post("/article-edit", require("./admin/article-add"))


//测试
admin.get("/test", (req, res) => {
    
    res.setHeader("Access-Control-Allow-Origin","*");
    const message = "我是数据"
    res.send(message)
})
module.exports = admin