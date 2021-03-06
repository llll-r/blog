const { Article } = require("../../model/article")
const pagination = require("mongoose-sex-page")
const { json } = require("body-parser")
module.exports = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    const page = req.query.page
    req.app.locals.currentLink = "article"
    // let articles = await pagination(Article).find().page(page).size(2).display(3).populate("author").exec()
    let articles = await Article.find().populate("author").exec()
    articles = JSON.stringify(articles)
    articles = JSON.parse(articles)
    res.send(articles)
}