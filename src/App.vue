<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        发现s
      </mt-tab-item>
      <mt-tab-item id="我的">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import { Tabbar, TabItem } from 'mint-ui'
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
export default {
  name: 'app',
  data: function () {
    return {
      selected: true,
      nice: 'e'
    }
  }
}
</script>

<style>
  /*将初始化的样式去掉--sss*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
