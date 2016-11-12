<template>
  <div>
    <mt-header title="编辑考勤">
      <router-link :to="{path:'../'}" slot="left" >
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-cell title="考勤名称" is-link >
      <!--这里是一个链接到考勤名称页填写-->
      <span style="color: green">未填写</span>
    </mt-cell>
    <mt-cell title="上班时间" is-link >
      <!--这里是一个链接到考勤名称页填写-->
      <span style="color: green">{{workShit}}</span>
    </mt-cell>
    <mt-cell title="下班时间" is-link >
      <!--这里是一个链接到考勤名称页填写-->
      <span style="color: green">{{closingTime}}</span>
    </mt-cell>
    <mt-cell title="午休" is-link >
      <!--这里是一个链接到考勤名称页填写-->
      <span style="color: green">{{toggleLunch}}</span>
    </mt-cell>
    <mt-cell  title="说明文字">
      <span>每周一，二，三，四</span>
    </mt-cell>
  </div>
</template>
<script>
  /*
   * @workShift 上班时间
   * @closingTime 下班时间
   * */
  export default{
    data: function () {
      return {
        workShift: '9:00',
        closingTime: '23:00'
      }
    }
  }
</script>
<style></style>
