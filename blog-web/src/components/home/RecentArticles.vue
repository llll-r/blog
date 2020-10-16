<template>
  <div>
    <div id="articles">
      <a-divider orientation="left" id="recentArticle">📒 近期文章 </a-divider>
      <a-skeleton
        active
        class="fl"
        :paragraph="{ rows: 5 }"
        :loading="isLoading"
      >
        <div
          v-for="(item, index) in message"
          :key="index"
          style="width: 45%"
          class="mt-10 a-card"
          :class="isIndex(index)"
          @click="showArticle(item._id)"
        >
          <a-card hoverable size="default" style="height: 300px">
            <img
              slot="cover"
              alt="example"
              src="@/assets/img/1.jpg"
              style="width: 100%; height: 200px"
              class="card-img"
            />
            <a-card-meta :title="item.title">
              <template slot="description"> 
                <span class="publish-date">
                {{date(item.publishDate, "yyyy-mm-dd")}}
                </span>   
                <span v-for="(item, index) in item.tag" :key="index">
                   <a-tag  :color="colorList">
                      {{item? item:" "}}
                   </a-tag>
                </span>
                  <span  class="span-category fr">
                 <a-tag color="#2db7f5" v-show="item.category" class="category">
                 <a href="#">
                     {{item.category? item.category:" "}} ☁
                 </a>
                 </a-tag>
                </span>
                </template>
            </a-card-meta>
          </a-card>
        </div>
      </a-skeleton>
    </div>
    <div id="pagination">
      <a-pagination v-model="current" :total="50" show-less-items />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RecentArticles",
  data() {
    return {
      isLoading: false,
      current: 1,
      message: [],
    };
  },
  props: {},
  created() {
    axios.get("http://localhost:3000/admin/article").then((res) => {
      console.log(res);
      this.message = res.data;
      console.log(this.message);
    });
  },
  methods:{
      isIndex(index){
      return index%2==0?"fl":"fr"
    },
    showArticle(id){
        console.log("点击的id是："+id);
        this.$router.push("/article?id="+id)
    }
  
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  computed:{
  colorList(){
    // colorChoose = []
    return "red";
  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
.mt-10 {
  margin-top: 30px;
}
.ant-skeleton {
  width: 48%;
}
#articles {
  margin-bottom: 20px;
  /* border: 1px solid white;; */
  overflow: hidden;
  clear: both;
}
#recentArticle {
  font-size: 20px;
  font-family: serif;
  font-weight: 700;
}
#pagination {
  text-align: center;
  margin-top: 30px;
}
.a-card {
  overflow: hidden;
}
.card-img {
  transition: all 0.6s;
}
.card-img:hover {
  transform: scale(1.1);
}
.category{
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-size: 17px;
 
}
.publish-date{
  color: rgb(128, 127, 127);
  font-weight: 700;
  font-size: 16px;
  font-family: 'Courier New', Courier, monospace;
}

</style>
