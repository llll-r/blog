const mongoose = require("mongoose")
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, "请输入文章标题"]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required:[true, "请输入作者"]
    },
    publishDate: {
        type: Date,
        default:Date.now
        
    },
    category: {
        type: String,
        required:[true, "请输入分类"]
    },
    tag: {
        type: Array,
        required:[true, "请给文章打标签"]
    },
    cover: {
        type: String,
        default:null
    },
    content: {
        type:String
    }
})
const Article = mongoose.model("Article", articleSchema)
module.exports = {
    Article
}