import Vue from 'vue'
import App from './App.vue'
//解决移动端适配问题的
import "lib-flexible/flexible";
//引入路由router
import router from "./router";

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