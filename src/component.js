import header from './components/header.vue';
import footer from './components/footer.vue';

export default function (Vue) {
    Vue.component(header.name, header);
    Vue.component(footer.name, footer);
}
