<template>
  <div>
    <a-menu mode="horizontal" class="navigation" id="top">
      <a-menu-item key="mail" class="logo-name">
      <router-link to="/">  LvRui </router-link>
      </a-menu-item>
            <a-menu-item key="app"><router-link to="/category"><a-icon type="appstore" /> 分类 </router-link></a-menu-item>
      <a-menu-item key="time-line"><router-link to="/timeLine"> <a-icon type="bars" />时间轴</router-link> </a-menu-item>
      <a-menu-item key="alipay"><router-link to=""><a-icon type="message" />联系我</router-link></a-menu-item>
        <a-menu-item key="about"><router-link to="/about"><a-icon type="message" />关于我</router-link></a-menu-item>
      <a-menu-item key="search" class="fr"
        ><a-input-search placeholder="点我搜索" style="width: 150px" /></a-menu-item
      >
    </a-menu>
    <div class="container">
      <article></article>
      <!-- 路由视图开始 -->
     <div class="router-view">
        <router-view />
     </div>
<!-- 底部 -->
       <div>
       <a-divider orientation="center" id="footer">😀 
       <a-tag color="cyan">github</a-tag>
        <a-tag color="pink">运行52天</a-tag>
       <a-tag color="purple">ant design vue</a-tag>
       </a-divider>
    </div>
    </div>
 
    <!-- 底部 -->
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [{ title: "title" }],
    };
  },
};
</script>

<style>
.ant-menu-horizontal {
  text-align: center;
  height: 80px;
  line-height: 80px;
  font-size: 16px;
  font-family: fantasy;
}
.ant-menu-item-active,
.ant-menu-item-selected,
.ant-menu-item {
  border: 0 !important;
}

.logo-name {
  float: left;
  color: palevioletred !important;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 800;
  font-size: 22px;
  margin-left: 120px;
}
.container {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
}


.fr {
  float: right !important;
}

#footer{
  margin-top: 100px;
  margin-bottom: 30px;
   font-size: 20px;
    font-family: serif;
    font-weight: 700;
}

.ant-pagination-item {
  border-radius: 15px !important;
}

</style>
