<template>
  <div id='footerGuideContainer' >
    <!-- 绑定点击事件名为goPath 四个路由跳转的路由路径不一样 所以以参数形式为标识-->
    <div class="guideItem" @click="goPath('/msite')">
      <span><i class="iconfont icon-shouye" ></i></span>
      <span>首页</span>
    </div>
    <div class="guideItem" @click="goPath('/search')">
      <span><i class="iconfont icon-sousuo" ></i></span>
      <span>搜索</span>
    </div>
    <div class="guideItem" @click="goPath('/order')">
    <span><i class="iconfont icon-sousuo" ></i></span>
      <span>订单</span>
    </div>
    <div class="guideItem" @click="goPath('/profile')">
      <span><i class="iconfont icon-bussiness-man" ></i></span>
      <span>我的</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goPath(path){
        // $router(路由器对象，包含了路由跳转的方法) $route(路由信息对象， 包含当前路由的所有路由信息)
       //在当前路由路径跳到当前路由路径会报错
       //如果this.$route.path 不等于path 再去跳转
       this.$route.path !== path && this.$router.replace(path)
        // this.$router.push()
      }
    }
  }
</script>

<style scoped  lang='stylus' rel="stylesheet/stylus">
//引入混合的样式
@import "../../common/stylus/mixins.styl"
 #footerGuideContainer
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    border-top 1px solid #eee
    box-sizing border-box
    display flex
    background #fff
    .guideItem
      width 25%
      height 100%
      text-align center
      display flex
      //改变主轴方向
      flex-direction column
      span
        i
          font-size 22px
        &:first-child
          margin 6px 0
      &.active
        color $green
</style>
