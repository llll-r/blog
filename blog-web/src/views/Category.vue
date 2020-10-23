<template>
  <div class="category">
    <!-- 文章分类开始 -->
    <a-card
      title="文章分类"
      style="width: 80%"
      class="essay-categoty margin-auto"
    >
    </a-card>
    <a-card
      style="width: 80%; height: 250px"
      class="margin-auto"
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>

    <!-- 标签分类开始 -->
    <a-card
      title="标签分类"
      style="width: 80%"
      class="tag-categoty margin-auto"
    >
    </a-card>
    <a-card
      style="width: 80%; height: 250px"
      class="margin-auto"
      
    >
      <a-tag color="#87d068" class="tag"><a href="">🎐多线程</a>2</a-tag>
      <a-tag color="pink" class="tag"><a href="">🎐JAVA</a>3</a-tag>
      <a-tag color="red" class="tag"><a href="">🎐Node</a>5</a-tag>
      <a-tag color="#108ee9" class="tag"><a href="">🎐线程</a>7</a-tag>
      <a-tag color="cyan" class="tag"><a href="">🎐多线</a>5</a-tag>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "Category",
  data() {
    return {
      show: false,
    };
  },
  activated() {},
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 1000);
  },
  
};
</script>
<style>
.category {
  font-family: "Courier New", Courier, monospace;
}
.essay-categoty {
  background: rgb(195, 216, 171);
  text-align: center;
  margin-top: 30px !important;
}
.tag-categoty {
  background: rgb(240, 229, 180);
  text-align: center;
  margin-top: 30px !important;
}
.margin-auto {
  margin: 0 auto;
}
.tag{
  padding: 7px;
   margin-right: 20px;
   margin-top: 10px;
   font-size: 15px;
   font-family:'Times New Roman', Times, serif
}
</style>
