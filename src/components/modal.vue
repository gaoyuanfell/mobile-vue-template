<template>
  <div class="modal-box" :class="{'show':show2}" >
    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close" @after-leave="show2 = !show2" @before-enter="show2 = !show2">
      <div class="modal-container" v-if="show">
        <slot></slot>
      </div>
    </transition>
    <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div @click="show = !show" class="mask" v-if="show"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false,
      show2: false
    };
  },
  computed: {},
  watch: {
    show(val) {
      this.$emit("input", val);
    },
    value(val) {
      console.log(val)
      this.show = val;
    }
  },
  methods: {}
};
</script>
<style scoped lang="less">
.modal-box {
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  &.show {
    z-index: 11;
  }
  .mask {
    left: 0;
    top: 0;
    position: absolute;
    display: block;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .modal-container {
    min-width: 95vw;
    z-index: 1;
    contain: content;
    box-shadow: 0 16px 20px rgba(0, 0, 0, 0.4);
    background: #fff;
    border-radius: 0.08rem;
  }
}
</style>
