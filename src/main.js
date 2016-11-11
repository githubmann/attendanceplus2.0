import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/index'
// 路由插件启用
Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  routes: routes.routes
})
console.log(routes)
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
