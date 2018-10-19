<template>
  <div class="main">
    <div class="tabs">
      <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <router-view name="node"></router-view>
      </transition>
      <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <keep-alive>
          <router-view name="footer"></router-view>
        </keep-alive>
      </transition>
    </div>
    <!-- 通过路由 push进来的页面渲染view -->
    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view name="mode"></router-view>
    </transition>
  </div>
</template>

<script>
    export default {}
</script>

