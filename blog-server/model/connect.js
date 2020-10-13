//连接数据库
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/blog", {useNewUrlParser: true})
    .then(() => {
        console.log("连接成功");})
    .catch(err => {
         console.log(err);
     })   

