<template>
  <div class="push">
    <tab-modal :zIndex="1">
      <y-header>
        <span>用户</span>
      </y-header>
      <tab-scroll marginBottom="1rem">
        <router-link :to="{name:'login'}">登陆</router-link>
      </tab-scroll>
    </tab-modal>
    <transition-nav-open-close>
      <router-view></router-view>
    </transition-nav-open-close>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>
