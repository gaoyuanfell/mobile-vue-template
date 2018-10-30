<template>
  <div class="tab-content">
    <y-header title="首页"></y-header>
    <div class="content">
      <div class="scroll-content" ref="scroll">
          <router-link :to="{name:'info'}">info</router-link>
          <div v-for="item in 99"> 1111111111111111111111111 </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style>
</style>
