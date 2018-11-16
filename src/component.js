import header from './components/header.vue';
import footer from './components/footer.vue';
import actionSheet from './components/actionSheet.vue';
import modal from './components/modal.vue';
import switchInput from './components/switchInput.vue';
import previewImg from './components/previewImg.vue';

export default function (Vue) {
  Vue.component(header.name, header);
  Vue.component(footer.name, footer);
  Vue.component(actionSheet.name, actionSheet);
  Vue.component(modal.name, modal);
  Vue.component(switchInput.name, switchInput);
  Vue.component(previewImg.name, previewImg);
}
