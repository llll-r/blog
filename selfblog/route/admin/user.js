const user =  async (req, res) => {
    // console.log(req);
    console.log(req.body);
    const {email, password} = req.body
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render("admin/error", {
            errMsg:"邮箱或密码错误"
        })
    } else {
        let user = await User.findOne({ email })
        console.log(user);
        let isValid = await bcrypt.compare(password, user.password)
        if (isValid) {
            req.session.username = user.username
            req.app.locals.userInfo = user
            res.redirect("/admin/user")
        } else {
            res.render("admin/error", {
                errMsg:"用户名不存在"
            })
        }
    }
}
module.exports = user