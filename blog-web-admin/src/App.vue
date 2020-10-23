<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span><router-link to="/user"> 用户管理</router-link></span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span><router-link to="/articlePage"> 文章管理</router-link></span>
        </a-menu-item>
        <!-- <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">后台管理系统</a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-menu-item-selected{
background-color: #2c5e88!important

}
.header{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.content{
  margin-top: 70px;
  padding: 25px;
  background: white; 
height: calc(100vh - 64px);
}
  
</style>