<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="send">点我</button>
    {{message}}
  </div>
</template>
<script>
import axios from "axios"
export default {
  data(){
   return{
      message:""
   }
  },
  methods:{
    send(){
      axios.get("http://localhost:8081/admin/test").then(res=>{
        console.log(res);
      this.message = res.data

      })
    }
  }
}
</script>
