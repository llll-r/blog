const formidable = require("formidable")
const path = require("path")
const {Article} = require("../../model/article")
module.exports = async (req, res) => {
  const form = new formidable.IncomingForm()
  //设置上传路径
  form.uploadDir = path.join(__dirname, "../","../","public", "uploads")
  //保留文件后缀
  form.keepExtensions = true
  form.parse(req, async (err, fields, files) => {
    await Article.create({
      title: fields.title,
      author:fields.author,
      cover:files.cover.path.split("public")[1],
      publishDate:fields.publishDate,
      content:fields.content
    })
    res.redirect("/admin/article")
  })

}