<template>
  <div class="tab-modal" ref="modal">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tab-modal",
  props: {
    zIndex: {
      type: Number,
      default: 11
    }
  },
  watch: {
    zIndex(val) {
      console.info(val)
      this.$refs.modal.style.zIndex = val;
    }
  },
  mounted() {
    this.$refs.modal.style.zIndex = this.zIndex;
  }
};
</script>
<style lang="less" scoped>
.tab-modal {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: block;
  background: #f2f2f2;
  contain: strict;
}
</style>

