
const {User} = require("../../model/user")
module.exports = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    req.app.locals.currentLink = "user"
    const page = req.query.page ||1;
    let pageSize = 6
    let totalCount = await User.countDocuments({});
    let total = Math.ceil(totalCount / pageSize)
    let start = (page - 1)*pageSize
    const users =await User.find({}).limit(pageSize).skip(start)
    // res.render("admin/user", {
    //     user: users,
    //     totalCount: totalCount,
    //     total: total,
    //     start:start
    // })
    res.send(users)
}