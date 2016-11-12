<template>
  <div>
    <mt-header title="选择打卡位置">
      <router-link router-link :to="{path:'../'}" slot="left" append>
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-button plain size="large" @click="punchOut">使用此位置</mt-button>
  </div>
</template>
<script>
  export default {
    methods: {
      punchOut: function () {
      }
    }
  }
</script>
<style></style>
