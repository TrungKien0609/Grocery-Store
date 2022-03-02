import Vue from "vue";
import Vuex from "vuex";
import router from '../router/index.js'
Vue.use(Vuex);
import { PRODUCT_CONFIG, DISCOUNT_PRODUCT_CONFIG, SEARCH_PRODUCT_CONFIG, SHOW_PRODUCT_CONFIG, UPDATE_USER_CONFIG } from '../config/index.js'

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
export default new Vuex.Store({
  state: {
    // cart
    items: [],
    isEmpty: true,
    totalItems: 0,
    totalUniqueItems: 0,
    cartTotal: 0,

    // categories list
    categories: [],
    // products list
    products: {},
    discountProducts: {},
    searchResult: {},
    specificProduct: {},
    //user
    isLogin: false,
    userId: "",
    userName: "",
    userEmail: "",
    userPhone: "",
    userAddress: "",
    userAvatar: "",
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
    setQuantityItem(state, payload) {
      Vue.set(state.items[payload.index], 'hasAdd', payload.hasAdd);
      Vue.set(state.items[payload.index], 'itemTotal', payload.hasAdd * payload.price);
      // can't set as normal way: sate.items[payload.index].hasAdd = payload.hasAdd ( not reactive )
      if (payload.math) {
        state.totalItems++;
        state.totalUniqueItems = state.items.length;
        state.cartTotal += payload.price;
      } else {
        state.totalItems--;
        state.totalUniqueItems = state.items.length;
        state.cartTotal -= payload.price;
      }

      localStorage.setItem('items', JSON.stringify(state.items));
      localStorage.setItem('totalUniqueItems', state.totalUniqueItems);
      localStorage.setItem('cartTotal', state.cartTotal);
      localStorage.setItem('totalItems', state.totalItems);
      localStorage.setItem('isEmpty', state.isEmpty);
    },
    setItems(state, payload) {
      state.items = payload.items;
      state.totalUniqueItems = state.items.length;
      state.cartTotal += payload.price;
      state.totalItems++;
      state.isEmpty = false;

      localStorage.setItem('items', JSON.stringify(state.items));
      localStorage.setItem('totalUniqueItems', state.totalUniqueItems);
      localStorage.setItem('cartTotal', state.cartTotal);
      localStorage.setItem('totalItems', state.totalItems);
      localStorage.setItem('isEmpty', state.isEmpty);
    },
    deleteCartItem(state, id) {
      let index = state.items.findIndex(item => {
        return item.id === id;
      })
      if (index !== -1) {
        state.items.splice(index, 1);
        state.totalUniqueItems = state.items.length;
      }
      state.isEmpty = state.items.length > 0 ? false : true;

      localStorage.setItem('items', JSON.stringify(state.items));
      localStorage.setItem('totalUniqueItems', state.totalUniqueItems);
      localStorage.setItem('cartTotal', state.cartTotal);
      localStorage.setItem('totalItems', state.totalItems);
      localStorage.setItem('isEmpty', state.isEmpty);
    },
    setCartOnLoad(state) {
      state.items = localStorage.getItem('items') !== null ? JSON.parse(localStorage.getItem('items')) : [];

      state.isEmpty = localStorage.getItem('isEmpty') !== null ? JSON.parse(localStorage.getItem('isEmpty')) : true;

      state.totalItems = localStorage.getItem('totalItems') !== null ? JSON.parse(localStorage.getItem('totalItems')) : 0;

      state.totalUniqueItems = localStorage.getItem('totalUniqueItems') !== null ? JSON.parse(localStorage.getItem('totalUniqueItems')) : 0;

      state.cartTotal = localStorage.getItem('cartTotal') !== null ? JSON.parse(localStorage.getItem('cartTotal')) : 0;
    },
    setDataAfterAuth(state, res) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
      state.isLogin = true;
      state.userId = res.data.user.id,
        state.userName = res.data.user.name,
        state.userEmail = res.data.user.email,
        state.userPhone = res.data.user.phone,
        state.userAddress = res.data.user.address,
        state.userAvatar = res.data.user.image,
        router.push({ name: 'Home' }).catch(err => {
        });
    }
  },
  actions: {
    async login({ commit, dispatch, state }, inputs) {
      return await axios.post('/api/user/login', inputs).then(response => {
        commit('setCookie', {
          name: 'usertoken',
          value: response.data.token,
          date: 30
        });
        commit('setCookie', {
          name: 'useravatar',
          value: response.data.user.image,
          date: 30
        });
        commit('setCookie', {
          name: 'useremail',
          value: response.data.user.email,
          date: 30
        });
        commit('setCookie', {
          name: 'userid',
          value: response.data.user.id,
          date: 30
        });
        commit('setCookie', {
          name: 'username',
          value: response.data.user.name,
          date: 30
        });
        commit('setCookie', {
          name: 'userphone',
          value: response.data.user.phone,
          date: 30
        });
        commit('setCookie', {
          name: 'useraddress',
          value: response.data.user.address,
          date: 30
        });
        commit('setDataAfterAuth', response);
      })
    },
    async register({ commit, dispatch, state }, inputs) {
      return await axios.post('/api/user/register', inputs).then(response => {
        commit('setCookie', {
          name: 'usertoken',
          value: response.data.token,
          date: 30
        });
        commit('setCookie', {
          name: 'useravatar',
          value: response.data.user.image,
          date: 30
        });
        commit('setCookie', {
          name: 'useremail',
          value: response.data.user.email,
          date: 30
        });
        commit('setCookie', {
          name: 'userid',
          value: response.data.user.id,
          date: 30
        });
        commit('setCookie', {
          name: 'username',
          value: response.data.user.name,
          date: 30
        });
        commit('setCookie', {
          name: 'userphone',
          value: response.data.user.phone,
          date: 30
        });
        commit('setCookie', {
          name: 'useraddress',
          value: response.data.user.address,
          date: 30
        });
        commit('setDataAfterAuth', response);
      })
    },
    async logout({ commit, dispatch, state }) {
      return await axios.post('/api/user/logout').then(respone => {
        delete axios.defaults.headers.common["Authorization"];
        commit('eraseCookie', 'usertoken');
        commit('eraseCookie', 'useravatar');
        commit('eraseCookie', 'username');
        commit('eraseCookie', 'useremail');
        commit('eraseCookie', 'userphone');
        commit('eraseCookie', 'useraddress');
        commit('eraseCookie', 'userid');
        state.isLogin = true,
          router.go();
      })
    },
    async firstLoadUserData({ commit, dispatch, state }) {
      let userToken = getCookie('usertoken');
      let userAvatar = getCookie('useravatar');
      let userEmail = getCookie('useremail');
      let userPhone = getCookie('userphone');
      let userAddress = getCookie('useraddress');
      let userName = getCookie('username');
      let userId = getCookie('userid');
      if (userToken !== "" && userAvatar !== "" && userEmail !== "" && userName !== "") {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + userToken;
        state.userEmail = userEmail;
        state.userAvatar = userAvatar;
        state.userAddress = userAddress;
        state.userId = userId;
        state.userName = userName;
        state.userPhone = userPhone;
        state.isLogin = true;
      }
    },
    async changePassword({ commit, dispatch, state }, payload) {
      return axios.post('/api/user/change-password/' + payload.id, payload.form);
    },
    async getAllCategories({ commit, state }) {
      // Vue.set(state.data, payload.saveWith, {}) // not working
      await axios
        .get('/api/category/all')
        .then((response) => {
          state.categories = response.data;
        })
        .catch(function (error) {
          alert("Có lỗi");
        });
    },
    async getProducts({ commit, state }, page) {
      await axios
        .get(PRODUCT_CONFIG.link + "?page=" + page + '&per_page=' + PRODUCT_CONFIG.perPage)
        .then((response) => {
          state.products = response.data;
        })
        .catch(function (error) {
          alert("Có lỗi");
        });
    },
    async getDiscountProducts({ commit, state }, page) {
      await axios
        .get(DISCOUNT_PRODUCT_CONFIG.link + "?page=" + page + '&per_page=' + DISCOUNT_PRODUCT_CONFIG.perPage)
        .then((response) => {
          state.discountProducts = response.data;
        })
        .catch(function (error) {
          alert("Có lỗi");
        });
    },
    async search({ commit, state }, payload) {
      await axios
        .get(SEARCH_PRODUCT_CONFIG.link + "?page=" + payload.page + '&per_page=' + SEARCH_PRODUCT_CONFIG.perPage, {
          params: payload.data
        })
        .then((response) => {
          state.searchResult = response.data;
        })
    },
    async showSpecificProduct({ commit, state }, payload) {
      await axios
        .get(SHOW_PRODUCT_CONFIG.link + payload.slug)
        .then((response) => {
          state.specificProduct = response.data;
        })
    },
    async updateUser({ commit, dispatch, state }, payload) {
      let formData = new FormData();
      if (typeof payload.image !== 'undefined' && payload.image.files.length > 0) {
        formData.append("image", payload.image.files[0]);
      }
      for (let key in payload) {
        if (key === "image") { continue; }
        formData.append(key, payload[key]);
      }
      formData.append("_method", "PUT");
      return axios
        .post(UPDATE_USER_CONFIG.link + payload.id, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
    },

  },
  modules: {},
});
