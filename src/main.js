require("./vendor.js")
import Vue from 'vue'
import store from "./store";
import App from './App.vue'
import router from './router'
import component from './component';
import directive from './directive';
// import Tab  from './core/tabs';
// import Transition  from './core/transition';
component(Vue)
directive(Vue)

Vue.config.productionTip = false
// Vue.use(Tab)
// Vue.use(Transition)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
