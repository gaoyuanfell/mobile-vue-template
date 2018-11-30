<template>
  <tab-modal :zIndex="1">
    <y-header>
      <span>首页</span>
    </y-header>
    <tab-scroll marginBottom="1rem">
      <router-link :to="{name:'info'}">info</router-link>
    </tab-scroll>
  </tab-modal>
</template>
<script>
export default {};
</script>
<style>
</style>
