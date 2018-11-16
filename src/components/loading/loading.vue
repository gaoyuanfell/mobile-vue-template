<template>
    <div class="loading">
      <div class="img">

      </div>
      <div class="mask">

      </div>
    </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.loading {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}
.img {
  position: relative;
  z-index: 1;
  &:after{
    content: '';
    display: block;
    width: 35px;
    height: 35px;
    background: url("loading.png") no-repeat center;
    background-size: 35px;
    animation: rotation 0.8s linear infinite;
  }
}
@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.mask {
  left: 0;
  top: 0;
  position: absolute;
  display: block;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
}
</style>
