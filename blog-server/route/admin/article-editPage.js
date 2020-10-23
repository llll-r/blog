const {Article} = require("../../model/article")

module.exports = async (req, res) => {
    const id = req.query.id
    let result = await Article.findById({ _id: id })
    result = JSON.stringify(result)
    result = JSON.parse(result)
    res.send(result)
}


