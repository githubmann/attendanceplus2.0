
<template>
    <div>
    <mt-header title="考勤管理">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right">设置</mt-button>
    </mt-header>
      <mt-button plain size="large" @click="punchOut">签退</mt-button>
  </div>
</template>
<script>
  /*
  * @param punchOut 签退----当调用的时候
  * */
  export default {
    methods: {
      punchOut: function () {
      }
    }
  }
</script>
<style>
</style>
