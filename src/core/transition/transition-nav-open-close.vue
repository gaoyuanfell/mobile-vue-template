<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated nav-open"
    leave-active-class="animated nav-close"
  >
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: "transition-nav-open-close"
};
</script>

<style lang="less" scoped>
@charset "UTF-8";
.animated {
  animation: 0.18s 0s ease-out both;
  -webkit-animation: 0.18s 0s ease-out both;
}

/*用于页面导航动画*/

.nav-open {
  -webkit-animation-name: zoomIn50;
  animation-name: zoomIn50;
  transform-origin: 50% 50%;
  box-shadow: 1px 1px 15px #3e3e3e;
}

@-webkit-keyframes zoomIn50 {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.85, 0.85, 0.85);
    transform: scale3d(0.85, 0.85, 0.85);
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomIn50 {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.85, 0.85, 0.85);
    transform: scale3d(0.85, 0.85, 0.85);
  }
  to {
    opacity: 1;
  }
}

.nav-close {
  -webkit-animation-name: zoomOut50;
  animation-name: zoomOut50;
  transform-origin: 50% 50%;
  box-shadow: 1px 1px 15px #3e3e3e;
}

@-webkit-keyframes zoomOut50 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.85, 0.85, 0.85);
    transform: scale3d(0.85, 0.85, 0.85);
  }
}

@keyframes zoomOut50 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.85, 0.85, 0.85);
    transform: scale3d(0.85, 0.85, 0.85);
  }
}
</style>
