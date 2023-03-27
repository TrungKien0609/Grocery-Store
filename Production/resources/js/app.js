require('./bootstrap');
import Vue from 'vue';
import App from './Vue/App.vue'
import SvgVue from 'svg-vue';
import router from './Vue/router/index';
import store from './Vue/store/index';
import VueClipboard from "vue-clipboard2";
import Toaster from 'v-toaster';
import 'v-toaster/dist/v-toaster.css';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

import axios from 'axios';
import VueAxios from 'vue-axios'
import VueSocialauth from 'vue-social-auth'
import { SOCIALITE } from './Vue/config/index.js'
Vue.use(Toaster, { timeout: 5000 })
Vue.use(VueClipboard);
Vue.use(SvgVue);

Vue.use(VueAxios, axios)
Vue.use(VueSocialauth, {

    providers: {
        google: {
            clientId: SOCIALITE.googleClientId,
            redirectUri: SOCIALITE.redirect // Your client app URL
        },
        facebook: {
            clientId: SOCIALITE.facebookClientId,
            redirectUri: SOCIALITE.redirect + '/' // Your client app URL, must have last character /
        }
    }
})

Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false
const app = new Vue({
    router,
    store,
    el: '#app',
    components: {
        App
    }
})
