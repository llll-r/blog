const {Article} = require("../../model/article")
const article = require("../../model/article")
module.exports = async (req, res) => {
    const id = req.query.id
    await Article.deleteOne({_id: id },)
    console.log("删除");
}