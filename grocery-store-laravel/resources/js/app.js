require('./bootstrap');
import Vue from 'vue';
import App from './Vue/App.vue'
import SvgVue from 'svg-vue';
import router from './Vue/router/index';
import store from './Vue/store/index';
import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);
Vue.use(SvgVue);
const app = new Vue({
    router,
    store,
    el: '#app',
    components: {
        App
    }
})
