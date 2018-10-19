<template>
  <div class="tab-content">
    <y-header title="首页"></y-header>
    <div class="content">
      <div class="scroll-content" margin-tabbar margin-header>
        index
        <router-link :to="{name:'info'}">info</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{

    }
  }
</script>
<style>

</style>
