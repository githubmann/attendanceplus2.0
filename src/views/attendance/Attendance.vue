<template>
  <div>
    <mt-header title="multiple button">
      <router-link to="/" slot="left">
        <mt-button icon="back">backs</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Header, Button } from 'mint-ui'
  Vue.component(Header.name, Header)
  Vue.component(Button.name, Button)
  export default{
    data: function () {
      return {
        title: '2test'
      }
    },
    methods: {
      handleClose: function () {
        console.log(this.data)
      }
    }
  }
</script>
<style></style>
