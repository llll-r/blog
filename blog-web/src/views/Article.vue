<template>
  <div>
    <div id="article-container">
      <div class="article-header">
        <h3 class="article-title">{{message.title}}</h3>
        <div class="article-info">
          <span class="author">{{message.author.username}}</span>
          <span>{{date(message.publishDate, "yyyy-mm-dd")}}</span>
        </div>
      </div>
      <div class="article-content" v-html="message.content" style="color:'black'">
   
      </div>
      <div class="article-comment">
        <h4>评论</h4>

        <form class="comment-form">
          <textarea class="comment"></textarea>
          <div class="items">
            <input type="submit" value="提交" />
          </div>
        </form>
        <div class="comment-list">
          <div class="mb10">
            <div class="article-info">
              <span class="author">Coder</span>
              <span>2020-09-10</span>
              <span>wjb19891223@163.com</span>
            </div>
            <div class="comment-content">nice 就是这样, 非常好 !</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 文章框架结束 -->
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Article",
  data() {
    return {
        message:""
    };
  },
  activated() {},
  created(){
      console.log(this.$route.query.id);
        axios.get("http://localhost:3000/home/article?id="+this.$route.query.id).then((res) => {
      console.log(res);
      this.message = res.data;
      console.log(this.message);
    });
  }
};
</script>
<style scoped>
@import url("../assets/css/base.css");
@import url("../assets/css/article.css");
#article-container {
  width: 90%;
  margin-top: 0px;
}
.article .container {
  padding: 0 !important;
}
</style>
