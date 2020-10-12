const mongoose = require("mongoose")
const Joi = require("joi")



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
    },
    
})

const User = mongoose.model("User", userSchema)

const validateUser = user => {
    const schema = {
        username: Joi.string().min(2).max(5).required().error(new Error("用户名不符合要求")),
        email: Joi.string().email().required().error(new Error("邮箱不符合要求")),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error("密码不符合要求")),
        role: Joi.string().valid("normal", "admin").required().error(new Error("角色值非法")),
        state: Joi.number().valid(0, 1).required().error(new Error("状态值非法"))
    };
   return  Joi.validate(user, schema)
}
module.exports = {
    User,
    validateUser
}