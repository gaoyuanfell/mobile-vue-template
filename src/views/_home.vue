<template>
  <div class="push">
    <div class="tab-content">
      <div class="content">
        <y-header>user</y-header>
        <div class="scroll-content" margin-tabbar margin-header>

        </div>
      </div>
    </div>

    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  }
};
</script>
<style lang="less" scoped>
</style>
