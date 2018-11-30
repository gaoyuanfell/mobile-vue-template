<template>
  <div class="tab-scroll" ref="scroll">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tab-scroll",
  props:{
    marginBottom:{
      type:String,
      default: '0'
    }
  },
  mounted(){
    const previous = this.$refs.scroll.previousElementSibling || this.$refs.scroll.previousSibling
    if(previous){
      let height = previous.clientHeight;
      let _fontSize = document.documentElement.style.fontSize.match(/\d+/g);
      let heightStr = `${height}px`;
      if (_fontSize) {
        heightStr = `${height / +_fontSize[0]}rem`;
      }
      this.$refs.scroll.style.marginTop = heightStr;
    }
    this.$refs.scroll.style.marginBottom = this.marginBottom;
  },
};
</script>
<style lang="less" scoped>
.tab-scroll {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 2;
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
  background: #f2f2f2;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position;
  overscroll-behavior: contain;
}
</style>

