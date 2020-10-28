<template>
  <div>
    <div id="articles">
      <a-divider orientation="left" id="recentArticle">📒 近期文章 </a-divider>
      <div
        v-for="(item, index) in message"
        :key="index"
        style="width: 48%"
        class="mt-10 a-card"
        :class="isIndex(index)"
        @click="showArticle(item._id)"
      >
        <a-skeleton
          active
          class="fl"
          :paragraph="{ rows: 5 }"
          :loading="isLoading"
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
                  {{ date(item.publishDate, "yyyy-mm-dd") }}
                </span>
                <span v-for="(item, index) in item.tag" :key="index">
                  <a-tag :color="colorList">
                    {{ item ? item : " " }}
                  </a-tag>
                </span>
                <span class="span-category fr">
                  <a-tag
                    color="#2db7f5"
                    v-show="item.category"
                    class="category"
                  >
                    <a href="#">
                      {{ item.category ? item.category : " " }} ☁
                    </a>
                  </a-tag>
                </span>
              </template>
            </a-card-meta>
          </a-card>
        </a-skeleton>
      </div>
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
      isLoading: true,
      current: 1,
      message: [],
    };
  },
  props: {},
  created() {
    axios.get("http://101.37.117.102:8080/admin/article").then((res) => {
      this.message = res.data;
      console.log(this.message);
      this.isLoading = false;
    });
  },
  methods: {
    isIndex(index) {
      return index % 2 == 0 ? "fl" : "fr";
    },
    showArticle(id) {
      console.log("点击的id是：" + id);
      this.$router.push("/article?id=" + id);
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  computed: {
    colorList() {
      // colorChoose = []
      return "red";
    },
  },
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
  transition: all 0.6s;
}
.card-img {
  transition: all 0.6s;
}
.card-img:hover {
  transform: scale(1.1);
}
.category {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 17px;
}
.publish-date {
  color: rgb(128, 127, 127);
  font-weight: 700;
  font-size: 16px;
  font-family: "Courier New", Courier, monospace;
}

.a-card:hover {
  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px;
  -moz-box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px;
  border-radius: 5px;
}
</style>
