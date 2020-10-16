const {Article} = require("../../model/article")

module.exports = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    const id = req.query.id
    // const result = await Article.find().populate("author")
    let result = await Article.findById({ _id: id }).populate("author")
    result = JSON.stringify(result)
    result = JSON.parse(result)
    res.send(result)

    // res.render("home/article", {
    //     result:result
    // })
}