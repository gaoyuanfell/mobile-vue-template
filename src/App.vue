<template>
  <div class="main">
    <tabs>
      <transition-fade-in-out>
        <router-view name="node"></router-view>
      </transition-fade-in-out>

      <transition-fade-in-out>
        <keep-alive>
          <router-view name="footer"></router-view>
        </keep-alive>
      </transition-fade-in-out>
    </tabs>

    <!-- 通过路由 push进来的页面渲染view -->
    <transition-nav-open-close>
      <router-view name="mode"></router-view>
    </transition-nav-open-close>

    <!-- 首次加载 -->
    <transition-nav-open-close>
      <router-view name="index"></router-view>
    </transition-nav-open-close>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
</style>
