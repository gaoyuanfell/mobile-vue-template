<template>
  <div>
    <div class="tab-content">
      <y-header title="用户"></y-header>
      <div class="content">
        <div class="scroll-content" margin-tabbar margin-header>
          <router-link :to="{name:'login'}">登陆</router-link>
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
    mounted(){
      console.info('user')
    },
  }
</script>
<style>

</style>
