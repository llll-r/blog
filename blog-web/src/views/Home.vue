<template>
  <div class="home">
    <!-- 我想说的话 -->
    <MyVoice></MyVoice>
    <!-- 近期文章开始 -->
    <RecentArticles />
       <!-- 锚点开始 -->
  <div id="a-anchor">
      <a-anchor>
      <a-anchor-link href="#top" title="回到顶部" />
      <a-anchor-link href="#my-voice" title="我想说的话" />
      <a-anchor-link href="#recentArticle" title="近期文章" />
    </a-anchor>
  </div>
    <!-- 锚点结束 -->
  </div>
</template>

<script>
// @ is an alias to /src
import MyVoice from "@/components/home/MyVoice.vue";
import RecentArticles from "@/components/home/RecentArticles.vue";

export default {
  name: "Home",
  components: {
    MyVoice,
    RecentArticles,
  },
};
</script>
<style  scoped>
#a-anchor {
  position: fixed;
  right: 0;
  top: 50%;
}
</style>
