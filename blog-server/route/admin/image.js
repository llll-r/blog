const path = require("path")
const formidable = require("formidable")
module.exports = async (req, res) => {
    console.log("请求到我了");
    const form = new formidable.IncomingForm()
     // //设置上传路径
  form.uploadDir = path.join(__dirname, "../","../","public", "uploads")
  // //保留文件后缀
  form.keepExtensions = true
    form.parse(req, async (err, fields, files) => { 
            console.log(files);
    })
}