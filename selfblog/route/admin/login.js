const { model } = require("mongoose")

const login = (req, res) => {
    res.render("admin/login")
}
module.exports = login;