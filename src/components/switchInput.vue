<template>
  <label class="m-switch" :class="{'disabled': disabled, 'active': checked}">
    <input :disabled="disabled" type="checkbox" v-model="checked" class="m-switch-input" @change="change($event)">
    <span class="m-switch-helper" :style="{'background-color': color}"></span>
  </label>
</template>
<script>
export default {
  name: "switch-input",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#ccc"
    }
  },
  data() {
    return {
      checked: false
    };
  },
  computed: {},
  watch: {
    checked(val) {
      this.$emit("input", val);
    },
    value(val) {
      this.checked = val;
    }
  },
  methods: {
    change(evnt) {
      this.$emit("input", evnt.target.checked);
      this.$emit("changed", evnt.target.checked);
    }
  }
};
</script>
<style lang="less" scoped>
.m-switch {
  display: block;
  transition: width 0.2s;
  position: relative;
  cursor: pointer;
  width: 1rem;
  height: 0.55rem;
  user-select: none;
  &.disabled {
    cursor: no-drop;
  }
  .m-switch-input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .m-switch-helper {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 0.27rem;
    background-color: #ccc;
    border: 1px solid #c4c9d2;
    padding: 0 !important;
    transition-duration: 0.4s;
    transition-property: background-color;
  }
  .m-switch-helper:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    box-shadow: 0 0 0.06rem rgba(0, 0, 0, 0.2);
    background-color: #fff;
    pointer-events: none;
    transition-timing-function: cubic-bezier(0.54, 1.85, 0.5, 1);
    transition-duration: 0.4s;
    transition-property: left;
  }
  .active {
    left: 0.46rem;
  }
  .m-switch-input:checked + .m-switch-helper:before {
    left: 0.46rem;
  }
  .m-switch-input:checked + .m-switch-helper {
    background-color: #43ae00 !important;
  }
}
</style>


