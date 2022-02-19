require('../js/bootstrap');
import Vue from 'vue';
import App from './Vue/App.vue'
import router from './Vue/router/index';
import store from './Vue/store/index';
import SvgVue from 'svg-vue';

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
let token = getCookie('usertoken');
if (token !== "") {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};

Vue.use(SvgVue);
const app = new Vue({
    router,
    store,
    el: '#app',
    components: {
        App
    }
})