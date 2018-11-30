import Tabs from './tabs.vue'
import TabModal from './tab-modal.vue'
import TabScroll from './tab-scroll.vue'
const Tab = {}
Tab.install = function(Vue, options){
  Vue.component(Tabs.name, Tabs);
  Vue.component(TabModal.name, TabModal);
  Vue.component(TabScroll.name, TabScroll);
}

export default Tab
