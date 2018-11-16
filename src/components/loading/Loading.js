import Vue from 'vue';
import loading from './loading.vue'

const LoadingConstructor = Vue.extend(loading);
let instance;
let number = 0
let getAnInstance = () => {
  if (!instance) {
    instance = new LoadingConstructor({
      el: document.createElement('div'),
    });
  }
  return instance
};

LoadingConstructor.prototype.open = (config = {}) => {
  let instance = getAnInstance();
  instance.$props.loadingBg = config.loadingBg
  document.body.appendChild(instance.$el);
  ++number
  return instance;
};

LoadingConstructor.prototype.close = function () {
  let instance = getAnInstance();
  --number
  if (instance.$el && number == 0) {
    document.body.removeChild(instance.$el);
  }
};

let Loading = getAnInstance();
export default Loading
