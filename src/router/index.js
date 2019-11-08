//引入vue的核心库
import Vue from "vue";
//引入vue的扩展库
import VueRouter from "vue-router";
//
import routes from "./routes";

//声明使用扩展库
Vue.use(VueRouter)

//1.生成路由器管理路由

const router = new VueRouter({
  mode:'hash',  //配置路由路径#默认hash是带#的   如果不带#应该为 history
  routes
})

//默认暴露
export default router