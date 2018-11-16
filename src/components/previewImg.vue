<template>
  <div ref="box" class="preview-img-box">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "preview-img",
  props: {
    time:{
      type: Number,
      default: 4000,
    }
  },
  data() {
    return {
      number: 0,
      width: 0,
      x: 0,
      index: 0,
      timerNumber: 0,
      destroyed: false,
    };
  },
  computed: {},
  created() {},
  mounted() {
    let children = Array.from(this.$refs.box.children);
    console.info(children)
    this.number = children.length;
    children.forEach(item => {
      item.style.width = item.clientWidth + 'px'
    })
    let width = this.width = children.map(a => a.clientWidth).reduce((a, b) => a + b);
    this.$refs.box.style.width = width + 'px'
    this.$refs.box.style.display = 'flex'
    if(this.number > 1){
      this.timer()
    }
  },
  methods: {
    timer(){
      this.timerNumber = setInterval(()=> {
        if(this.destroyed) return;
        this.next()
      }, this.time)
    },
    pre(){
      let _x = this.width / this.number;
      --this.index
      if(this.index < 0) this.index = this.number - 1
      this.$refs.box.style.transform = `translateX(-${this.index * _x}px)`
    },
    next(){
      let _x = this.width / this.number;
      ++this.index
      if(this.index > this.number - 1) this.index = 0
      this.$refs.box.style.transform = `translateX(-${this.index * _x}px)`
    }
  },
  destroyed(){
    this.destroyed = true;
    clearInterval(this.timerNumber)
  }
};
</script>
<style lang="less" scoped>
.preview-img-box{
  transition: all 0.5s;
  transform: translateX(0);
}
</style>


