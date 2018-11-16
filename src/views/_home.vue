<template>
  <div class="content-modal">
    <y-header>
      <span>欢迎</span>
    </y-header>
    <div class="content">
      <div class="scroll-content" margin-header margin-tabbar>
        <router-link :to="{name:'index'}">index</router-link>
        <div class="ripple-box" v-ripple></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="less" scoped>
  .ripple-box{
    width:100%;
    height:1rem;
  }
</style>
