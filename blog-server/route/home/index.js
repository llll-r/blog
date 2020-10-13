const {Article} = require("../../model/article")
module.exports =async (req, res) => {
    let result = await Article.find().populate("author")
    result = JSON.stringify(result)
    result = JSON.parse(result)
    // res.send(result)

    res.render("home/default", {
        result:result
    })
}