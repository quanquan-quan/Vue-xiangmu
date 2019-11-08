<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
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
