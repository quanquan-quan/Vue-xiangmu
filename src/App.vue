<template>
  <div>
  <router-view></router-view>
  <FooterGuide/>
  </div>
</template>

<script>
//引入FooterGuide组件
import FooterGuide from "./conmpnents/FooterGuide/FooterGuide";

export default {
  name: 'app',
  components:{
    FooterGuide
  }
  
}
</script>
<style lang='stylus' rel="stylesheet/stylus">


 //定义变量：复用
 $color = red
 * 
  padding 0
  margin 0
 #app
   .q
     width 200px
     height 200px
     color $color
     background-color yellow

</style>
