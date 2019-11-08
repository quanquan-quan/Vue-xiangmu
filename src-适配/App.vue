<template>
  <div id="app">
    <div class="q" >zunzun</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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
