<template>
  <div>
    <mt-header title="选择考勤方式">
      <router-link :to="{path:'../'}" slot="left" append>
        <mt-button icon="back">backs</mt-button>
      </router-link>
    </mt-header>

    <mt-cell title="使用GPS考勤" is-link>
      <span style="color: green">这里是元素</span>
    </mt-cell>
    在地图上选择考勤地点，员工进入考勤范围
    <mt-cell title="使用WI-FI考勤" is-link>
      <span style="color: green">这里是元素</span>
    </mt-cell>
    使用指定WIFI考勤，员工用手机连接到此WIFI即可打卡

  </div>
</template>
<script>
  import Vue from 'vue'
  import { Cell } from 'mint-ui'
  Vue.component(Cell.name, Cell)
</script>
<style scoped>
  /*.mint-cell-title, .mint-cell-title .mint-cell-text{*/
    /*text-align: left;*/
  /*}*/
</style>
