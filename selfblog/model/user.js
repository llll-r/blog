const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
//创建用户集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        unique: true, //保证邮箱地址不重复
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    // 0 启用状态  1是禁用状态
    state: {
        type: Number,
        default: 0
    }
})


const User = mongoose.model("User", userSchema)
// async function createUser() {
//     const salt = await bcrypt.genSalt(10);
//     const pass = await bcrypt.hash("123456", salt)
//     const user = await User.create({
//             username: "lvrui",
//             email: "lvrui1@qq.com",
//             password: pass,
//             role: "admin",
//             state: 0
//     })
//     return user
// }

// createUser()
// User.create({
//     username: "lvrui",
//     email: "lvrui@qq.com",
//     password: "123456",
//     role: "admin",
//     state: 0
// }).then(() => {
//     console.log("创建成功");
// }).catch(() => {
//     console.log("创建失败");
// })

module.exports = {
    User
}