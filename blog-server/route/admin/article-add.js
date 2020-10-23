const formidable = require("formidable")
const path = require("path")
const { Article } = require("../../model/article")
module.exports = async (req, res) => {

  const form = new formidable.IncomingForm()
  // console.log(form);
  // //设置上传路径
  form.uploadDir = path.join(__dirname, "../","../","public", "uploads")
  // //保留文件后缀
  form.keepExtensions = true
  form.parse(req, async (err, fields, files) => {
    console.log(fields);
    console.log("----------------------------------------------");
    console.log(files.cover);
    if (fields.id!=null) {
      await Article.findByIdAndUpdate({_id:fields.id}, {
        title: fields.title,
        author: fields.author,
        category: fields.category,
        tag: fields.tag,
        cover: files.cover ? files.cover.path.split("public")[1] : "",
        publishDate: fields.publishDate,
        content: fields.content
      }).then(result => {
        console.log("添加成功");       
      })
    } else {
      console.log(fields);
      console.log("--------------------------------------------------------");
      console.log(files.cover);
      await Article.create({                  
        title: fields.title,
        author: fields.author,
        category: fields.category,
        tag: fields.tag,
        cover: files.cover ? files.cover.path.split("public")[1] : "",
        publishDate: fields.publishDate,
        content: fields.content
      })
    }
  })

}