<template>
  <div class="voice">
    <a-divider orientation="left" id="my-voice">🔔 我想说的话 </a-divider>
    <a-card id="voice-content">
      <transition name="slide-p">
        <p v-show="show">
          石头和年糕打架，石头飞起一脚就把年糕踢进了大海…………
          从前有一对恋人私定终生,但是男生需要服兵役,便和女生定下誓言,给了女生一枚钻石戒,
          并许诺在三年后的今天与那女生碰面,到时候,那枚戒指作为婚戒.
          好不容易3年过去了,
          女生一直在等男生,却一直等不到,她伤心过度,绝望的她把钻戒扔入大海,远走他乡.可是,那男生其实也一直在等那女孩,可是,女孩误解了约会地点,
          于是便永远的成为了遗憾.男生伤心欲绝…过了几年,男生出外钓鱼,猜猜看他钓到了什么?
          年糕!!!
        </p>
      </transition>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "MyVoice",
  data() {
    return {
        show:false
    };
  },
  activated() {
     
  },
  mounted(){
      setTimeout(()=>{
           this.show= true
      }, 2000)
  }
};
</script>
<style>
.voice {
  margin-top: 20px;
}
#my-voice {
  font-size: 20px;
  font-family: serif;
  font-weight: 700;
}
#voice-content {
  margin-top: 25px;
  width: 75%;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px dashed gainsboro;
  font-family: cursive;
  font-size: 16px;
}
.slide-p-enter{
    opacity: 0;
    transform: scale(1.2);
}
.slide-p-enter-active{
    transition: all 1s ease-in;
}
</style>
