<template>
  <tab-modal :zIndex="1">
    <y-header>
      <span>详情</span>
    </y-header>
    <tab-scroll marginBottom="1rem">info
      <router-link :to="{name:'user'}">user</router-link>
    </tab-scroll>
  </tab-modal>
</template>
<script>
export default {};
</script>
<style>
</style>
