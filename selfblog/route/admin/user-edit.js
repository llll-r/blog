const { User, validateUser } = require("../../model/user")
const Joi = require("joi");
const bcrypt = require("bcrypt");
module.exports = async (req, res) => {
    const id = req.body.id
    // res.send("密码是"+req.body.password)
    // const user = await User.findOne({ _id: id })
    // const result = await bcrypt.compare(req.body.password, user.password)

    // if (result) {
    //     res.send("匹配成功")
    // } else {
    //     res.send("匹配不成功")
    // }
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)
    req.body.password = password
    await User.findByIdAndUpdate({ _id: id }, {
        username: req.body.username,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role,
        state:req.body.state

    })
    res.redirect("/admin/user")
    // res.send("ok")

}