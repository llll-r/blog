<template>
    <div class="timeLine">
                <h1>文章归档</h1>
   <a-timeline>
    <a-timeline-item class="timeLine-content" >2020年</a-timeline-item>
    <a-timeline-item color="green" class="timeLine-content">
      <a-tag color="red">5月5日</a-tag>&nbsp;&nbsp;&nbsp;📃  <h3>发布了新博客</h3>
    </a-timeline-item>
    <a-timeline-item position="left" class="timeLine-content">
      <a-tag color="green">4月5日</a-tag>&nbsp;&nbsp;&nbsp;📃  <h3>发布了一篇内容</h3>
    </a-timeline-item>
    <a-timeline-item color="red" position="left" class="timeLine-content">
      <a-tag color="blue">1月2日</a-tag>&nbsp;&nbsp;&nbsp;📃  <h3>一篇内容</h3>
    </a-timeline-item>
    <a-timeline-item class="timeLine-content">
          <a-tag color="green">1月2日</a-tag>
         📃<h3> Create a services site 2015-09-01</h3></a-timeline-item>
    <a-timeline-item class="timeLine-content">
       <a-tag color="pink">2月2日</a-tag>
     📃 <h3>Technical testing 2015-09-01</h3>
    </a-timeline-item>
    <a-timeline-item class="timeLine-content">
       <a-tag color="pink">2月2日</a-tag>
     📃 <h3>Technical testing 2015-09-01</h3>
    </a-timeline-item>
    <a-timeline-item class="timeLine-content">
       <a-tag color="pink">2月2日</a-tag>
     📃 <h3>Technical testing 2015-09-01</h3>
    </a-timeline-item>
  </a-timeline>

    </div>
</template>
<script>
export default {
    name:"TimeLine",
   data() {
      return {
      }
   },
   activated() {
   }
}
</script>
<style>
.timeLine{
    margin-left: 100px;
}
.timeLine-content{
    font-size: 17px;
}
h1{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 700;
    margin-bottom: 44px;
}
h3{
    display: inline-block;
    color: goldenrod;
}
h3:hover{
    cursor: pointer;
    color: gray;
}


</style>
