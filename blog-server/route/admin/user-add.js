const { User , validateUser} = require("../../model/user")
const Joi = require("joi");
const bcrypt = require("bcrypt");
module.exports = async (req, res) => {
    try {
        delete req.body.id;
        await validateUser(req.body)
    } catch (e) {
        return res.redirect(`/admin/user-edit?message=${e.message}`)
    }
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        res.redirect("/admin/user-edit?message=用户已经存在")
    }
    else {
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password, salt)
        req.body.password = password
        await User.create(req.body)
        res.redirect("/admin/user")
    }
    // res.send("ok")
}