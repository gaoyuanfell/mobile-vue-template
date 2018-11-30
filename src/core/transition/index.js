import TransitionFadeInOut from './transition-fade-in-out.vue'
import TransitionNavOpenClose from './transition-nav-open-close.vue'
const Transition = {}
Transition.install = function(Vue, options){
  Vue.component(TransitionFadeInOut.name, TransitionFadeInOut);
  Vue.component(TransitionNavOpenClose.name, TransitionNavOpenClose);
}

export default Transition
