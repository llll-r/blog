<template>
     <div class="login-body">
        <div class="login-container">
            <h4 class="title">管理员登录</h4>
            <div class="login">
                <form action="http://localhost:3000/admin/user" method="POST" id="loginForm">
                    <div class="form-group">
                        <label>邮件</label>
                        <input type="email" name="email" class="form-control" placeholder="请输入邮件地址">
                    </div>
                    <div class="form-group">
                        <label>密码</label>
                        <input type="password" name="password" class="form-control" placeholder="请输入密码">
                    </div>
                    <button type="submit" class="btn btn-primary">登录</button>
                </form>
            </div>
            <div class="tips"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Login",
   data() {
      return {
      }
   },
   activated() {
   }
}
</script>
<style>
/* pageFullScreen在index.css */

</style>
