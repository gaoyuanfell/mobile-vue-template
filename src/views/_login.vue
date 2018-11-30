<template>
  <tab-modal>
    <y-header>
      <span>登陆</span>
    </y-header>
    <tab-scroll style="background: red;">
      <router-link :to="{name:'login2'}">登陆2</router-link>
      <router-link :to="{name:'login3'}">登陆3</router-link>
    </tab-scroll>

    <transition-nav-open-close>
      <router-view></router-view>
    </transition-nav-open-close>
  </tab-modal>
</template>
<script>
export default {};
</script>
<style>
</style>
