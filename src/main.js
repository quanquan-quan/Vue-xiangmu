import Vue from 'vue'
import App from './App.vue'
//解决移动端适配问题的
import "lib-flexible/flexible";


//引入路由router
import router from "./router";
import GshopHeader from "./conmpnents/GshopHeader/GshopHeader.vue";

//Vue全局注册组件的语法：Vue.component(组件名，组件)

Vue.component('GshopHeader',GshopHeader)

Vue.config.productionTip = false



new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
  router,   //安装路由器
})


// new Vue({
//   render: h => h(App),
// }).$mount('#app')