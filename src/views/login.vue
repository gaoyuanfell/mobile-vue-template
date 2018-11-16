<template>
  <div class="content-modal">
    <y-header>
      <span>登陆</span>
    </y-header>
    <div class="content">
      <div class="scroll-content" margin-header>
        <router-link :to="{name:'login2'}">登陆2</router-link>
        <router-link :to="{name:'login3'}">登陆3</router-link>
      </div>
    </div>

    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view></router-view>
    </transition>

  </div>
</template>
<script>
  export default {}
</script>
<style>

</style>
