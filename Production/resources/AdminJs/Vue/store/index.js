import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import router from '../router/index.js'
Vue.use(Vuex);
import {
    CATEGORY_CONFIG
} from "../Config/index.js";
export default new Vuex.Store({
    state: {
        userName: "", // for admin 
        token: "",
        categories: {},
        users: {},
        products: {},
        subCategories: {},
        //
        selectCategories: [],
    },
    mutations: {
        setCookie(state, payload) {
            let expires = "";
            if (payload.days) {
                let date = new Date();
                date.setTime(date.getTime() + (payload.days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = payload.name + "=" + (payload.value || "") + expires + "; path=/";
        },
        //getCookie return value but mutation is void
        eraseCookie(state, name) {
            document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        },
    },
    actions: {
        getCookie({ commit, state }, cname) {
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
        },
        login({ commit, dispatch, state }, inputs) {
            axios.post('/api/user/login', inputs).then(response => {
                if (response.statusText === "OK" && response.data.user.role === 'admin') {
                    commit('setCookie', {
                        name: 'usertoken',
                        value: response.data.token,
                        date: 30
                    });
                    commit('setCookie', {
                        name: 'username',
                        value: response.data.user.name,
                        date: 30
                    });
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
                    state.userName = response.data.user.name;
                    router.push({ name: 'Home' });
                }
                else
                    alert('Bạn không đủ quyền hạn để vào trang này');
            }).catch(err => {
                alert(err.response.data.message);
            })
        },
        logout({ commit, dispatch, state }) {
            axios.post('/api/user/logout').then(respone => {
                delete axios.defaults.headers.common["Authorization"];
                commit('eraseCookie', 'usertoken');
                commit('eraseCookie', 'username');
                router.go();
            }).catch(err => {
                alert(err.respone.message);
            });
        },
        async getData({ commit, state }, payload) {
            // Vue.set(state.data, payload.saveWith, {}) // not working
            await axios
                .get(payload.config.link + "?page=" + payload.page + '&per_page=' + payload.config.perPage)
                .then((response) => {
                    state[payload.config.saveWith] = response.data;
                })
                .catch(function (error) {
                    alert("Không thể load " + payload.config.saveWith + " data");
                });
        },
        async addData({ commit, dispatch, state }, payload) {
            let formData = new FormData();
            for (let key in payload.form) {
                formData.append(key, payload.form[key]);
            }
            await axios
                .post(payload.config.link, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    dispatch('getData', {
                        page: 1,
                        config: payload.config
                    });
                    alert("Thêm " + payload.config.name + " thành công");
                })
                .catch(function (error) {
                    console.log(error.respone.data)
                    // alert(error.response.data.message);
                });
        },
        async showData({ commit, dispatch, state }, payload) {
            return await axios
                .get(payload.config.link + payload.id)
                .then((response) => {
                    return response.data;
                })
                .catch(function (error) {
                    alert(error.response.data.message);
                });
        },
        async updateData({ commit, dispatch, state }, payload) {
            let formData = new FormData();
            if (typeof payload.form.image !== 'undefined' && payload.form.image.files.length > 0) {
                formData.append("image", payload.form.image.files[0]);
            }
            for (let key in payload.form) {
                if (key === "image") { continue; }
                formData.append(key, payload.form[key]);
            }
            formData.append("_method", "PUT");
            axios
                .post(payload.config.link + payload.form.id, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    dispatch("getData", {
                        page: 1,
                        config: payload.config
                    });
                    alert("Edit " + payload.config.name + " thanh cong");
                })
                .catch((error) => {
                    alert(error.response.data.message);
                });
        },
        async deleteData({ commit, dispatch, state }, payload) {
            await axios
                .delete(payload.config.link + payload.id)
                .then((response) => {
                    dispatch('getData', {
                        page: 1,
                        config: payload.config
                    });
                })
                .catch(function (error) {
                    alert(error.response.data.message);
                });
        },
        async getSelectCategories({ commit, dispatch, state }) {
            await axios
                .get(
                    CATEGORY_CONFIG.link + 'all'
                )
                .then((response) => {
                    state.selectCategories = response.data;
                })
                .catch(function (error) {
                    alert("Có lỗi");
                });
        },
    },
    modules: {},
});
