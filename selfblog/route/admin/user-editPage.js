const { User } = require("../../model/user")
const bcrypt = require("bcrypt")
module.exports = async (req, res) => {
    const { id, message } = req.query
    if (id) {
        let userMessage = await User.findById({ _id: id })
        // await bcrypt.compare()
        res.render("admin/user-edit", {
            userMessage: userMessage,
            message: message,
            link: "/admin/user-edit?id="+id,
            button:"提交修改"
        })
    } else {
        res.render("admin/user-edit", {
            message: message,
            link: "/admin/user-add",
            button:"添加"
        })
    }



}