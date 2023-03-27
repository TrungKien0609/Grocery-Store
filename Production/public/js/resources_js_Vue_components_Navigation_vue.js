"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Vue_components_Navigation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Navigation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Navigation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _router_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router/index.js */ "./resources/js/Vue/router/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import LoadingEffect from "./LoadingEffect.vue";


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Navigation",
  components: {
    ListCategories: function ListCategories() {
      return __webpack_require__.e(/*! import() */ "resources_js_Vue_components_ListCategories_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./ListCategories.vue */ "./resources/js/Vue/components/ListCategories.vue"));
    },
    CartCheckOut: function CartCheckOut() {
      return __webpack_require__.e(/*! import() */ "resources_js_Vue_components_Cart_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./Cart.vue */ "./resources/js/Vue/components/Cart.vue"));
    },
    SummaryCart: function SummaryCart() {
      return __webpack_require__.e(/*! import() */ "resources_js_Vue_components_SummaryCart_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SummaryCart.vue */ "./resources/js/Vue/components/SummaryCart.vue"));
    } // LoadingEffect,

  },
  data: function data() {
    return {
      showCategories: null,
      mobile: null,
      mobileSideBar: null,
      showCart: null,
      searchText: ""
    };
  },
  created: function created() {
    var _this = this;

    window.addEventListener("click", function (e) {
      if (!e.target.closest(".categories") && _this.$refs.dekstopCategories !== undefined) {
        _this.showCategories = false;
      }
    });
    window.addEventListener("resize", this.checkScreenSize);
    this.checkScreenSize();
  },
  methods: _objectSpread({
    toggleCategories: function toggleCategories() {
      this.showCategories = !this.showCategories;
    },
    toggleSideBar: function toggleSideBar() {
      this.mobileSideBar = !this.mobileSideBar;
      this.$emit("toggleBlurBody");
    },
    checkScreenSize: function checkScreenSize() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth <= 1024) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
      this.showCategories = false;
      this.mobileSideBar = false;
      this.showCart = false; // reset all after responsive

      return;
    },
    toggleCart: function toggleCart() {
      this.showCart = !this.showCart;
      this.$emit("toggleBlurBody");
    },
    toggleAccount: function toggleAccount() {
      this.$emit("toggleAccount");
    },
    submitSearch: function submitSearch() {
      this.search({
        page: 1,
        data: "product=" + this.searchText
      }).then(_router_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].push({
        name: "Search",
        query: {
          product: this.searchText
        }
      }));
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["search"])),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["totalItems", "isLogin", "userAvatar"]))
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Navigation.vue?vue&type=style&index=0&id=6d0f1056&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Navigation.vue?vue&type=style&index=0&id=6d0f1056&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper[data-v-6d0f1056] {\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  border-bottom: 1px solid #ddd;\n  z-index: 20;\n}\n.wrapper .offer[data-v-6d0f1056] {\n  color: #ef4444;\n  border-radius: 5px;\n  background-color: rgba(239, 68, 68, 0.1);\n}\n.wrapper .offer[data-v-6d0f1056]::before {\n  content: \"\";\n  position: absolute;\n  right: -5px;\n  top: -5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #ef4444;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  -webkit-animation: live-data-v-6d0f1056 1.4s infinite ease-in-out 0.42s;\n          animation: live-data-v-6d0f1056 1.4s infinite ease-in-out 0.42s;\n}\n.wrapper .search[data-v-6d0f1056] {\n  width: 100%;\n  max-width: 750px;\n  margin: 0 auto;\n}\n@media (max-width: 1024px) {\n.wrapper .search[data-v-6d0f1056] {\n    padding: 1rem;\n}\n}\n.wrapper .search form[data-v-6d0f1056] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 7px;\n  overflow: hidden;\n  padding: 10px 20px;\n  margin-left: 2rem;\n}\n@media (max-width: 1024px) {\n.wrapper .search form[data-v-6d0f1056] {\n    margin: 0;\n}\n}\n.wrapper .search form input[data-v-6d0f1056] {\n  width: 100%;\n  font-family: sans-serif;\n  font-size: 0.9rem;\n  color: #4b5563;\n}\n.wrapper .search form input[data-v-6d0f1056]::-moz-placeholder {\n  color: #ccc;\n}\n.wrapper .search form input[data-v-6d0f1056]:-ms-input-placeholder {\n  color: #ccc;\n}\n.wrapper .search form input[data-v-6d0f1056]::placeholder {\n  color: #ccc;\n}\n.wrapper .search form button[data-v-6d0f1056] {\n  cursor: pointer;\n  margin-bottom: -3px;\n  background-color: transparent;\n}\n.wrapper .image[data-v-6d0f1056] {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.wrapper .image img[data-v-6d0f1056] {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.wrapper .header[data-v-6d0f1056],\n.wrapper .nav-bar[data-v-6d0f1056] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #10b981;\n  margin: 0 auto;\n  padding: 0.9rem 2.5rem;\n  width: 100%;\n}\n@media (max-width: 600px) {\n.wrapper .header[data-v-6d0f1056],\n.wrapper .nav-bar[data-v-6d0f1056] {\n    padding: 0.9rem 1rem;\n}\n}\n.wrapper .header .branding[data-v-6d0f1056],\n.wrapper .nav-bar .branding[data-v-6d0f1056] {\n  width: 125px;\n  min-width: 100px;\n  margin-left: -7px;\n}\n.wrapper .header .user-feature[data-v-6d0f1056],\n.wrapper .nav-bar .user-feature[data-v-6d0f1056] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.wrapper .search-mobile[data-v-6d0f1056] {\n  width: 100%;\n  background-color: #10b981;\n  border-top: 5px solid #fff;\n  padding: 0 2.5rem;\n}\n@media (max-width: 600px) {\n.wrapper .search-mobile[data-v-6d0f1056] {\n    padding: 0 1rem;\n}\n}\n.wrapper .search-mobile .search[data-v-6d0f1056] {\n  max-width: none;\n  padding: 1rem 0;\n}\n.wrapper .footer[data-v-6d0f1056] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin: 0 auto;\n  padding: 0.9rem 2.5rem;\n  background-color: #fff;\n}\n.wrapper .footer .nav-links ul[data-v-6d0f1056] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.wrapper .footer .nav-links ul .link-dark[data-v-6d0f1056] {\n  padding: 0.3rem 0;\n  margin-right: 2.5rem;\n  transition: 0.25s;\n  position: relative;\n  cursor: pointer;\n}\n.wrapper .footer .nav-links ul .link-dark.offer[data-v-6d0f1056] {\n  padding: 0.3rem 0.6rem;\n}\n.wrapper .footer .nav-links ul .link-dark .sub-menu[data-v-6d0f1056] {\n  position: absolute;\n  bottom: -460px;\n  left: 0;\n  z-index: 10;\n  height: 450px;\n  width: 320px;\n  background-color: #fff;\n  border-radius: 7px;\n  box-shadow: 0 2px 12px -1px rgba(0, 0, 0, 0.1), 0 2px 12px -1px rgba(0, 0, 0, 0.2);\n  overflow-y: auto;\n}\n.wrapper .footer .nav-links ul .link-dark .sub-menu[data-v-6d0f1056]::-webkit-scrollbar {\n  display: none;\n}\n.wrapper .footer .nav-links ul .link-dark .dark-arrow[data-v-6d0f1056] {\n  margin-left: 3px;\n}\n.wrapper .footer .nav-links ul .link-dark span[data-v-6d0f1056]:hover {\n  color: #10b981;\n}\n.wrapper .footer .nav-links ul .link-dark span:hover .dark-arrow[data-v-6d0f1056]  path {\n  fill: #10b981;\n}\n.wrapper .footer .more-info[data-v-6d0f1056] {\n  display: flex;\n  justify-content: flex-start;\n}\n.wrapper .footer .more-info .link-dark[data-v-6d0f1056] {\n  padding: 0.2rem;\n  margin-left: 3rem;\n  transition: 0.25s;\n}\n.wrapper .footer .more-info .link-dark[data-v-6d0f1056]:hover {\n  color: #10b981;\n}\n.wrapper .signal-icon[data-v-6d0f1056] {\n  margin: 0 1rem;\n  cursor: pointer;\n  padding: 0.5rem;\n  position: relative;\n}\n@media (max-width: 1024px) {\n.wrapper .signal-icon[data-v-6d0f1056] {\n    margin-right: 1rem;\n    margin-left: 0;\n    padding: 0.5rem 0;\n}\n}\n.wrapper .signal-icon[data-v-6d0f1056]:last-child {\n  margin-right: 0;\n}\n@media (max-width: 1024px) {\n.wrapper .signal-icon[data-v-6d0f1056]:last-child {\n    margin-right: 1rem;\n}\n}\n.wrapper .signal-icon .sub-info[data-v-6d0f1056] {\n  position: absolute;\n  right: -3px;\n  top: 0;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 13px;\n  height: 20px;\n  width: 20px;\n  color: #fff;\n  background-color: #ef4444;\n  border-radius: 15px;\n  border-radius: 50%;\n}\n.wrapper .side-bar .content[data-v-6d0f1056] {\n  position: fixed;\n  top: 0;\n  z-index: 999;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n}\n@media (max-width: 480px) {\n.wrapper .side-bar .content[data-v-6d0f1056] {\n    max-width: 480px;\n}\n}\n.wrapper .side-bar .content .header[data-v-6d0f1056] {\n  padding: 0.5rem 1.3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.wrapper .side-bar .content .header .branding[data-v-6d0f1056] {\n  width: 60px;\n}\n.wrapper .side-bar .content .header .close-side-bar-btn[data-v-6d0f1056] {\n  height: 32px;\n  width: 32px;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: #f9fafb;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.wrapper .side-bar .content .header .close-side-bar-btn .dark-icon[data-v-6d0f1056] {\n  display: block;\n  margin-left: -2px;\n}\n.wrapper .side-bar .content .header .close-side-bar-btn .dark-icon[data-v-6d0f1056]  path {\n  fill: rgba(255, 0, 0, 0.8);\n}\n.wrapper .side-bar .content .body[data-v-6d0f1056] {\n  flex: 1;\n  overflow-y: auto;\n}\n.wrapper .side-bar .content .body[data-v-6d0f1056]::-webkit-scrollbar {\n  display: none;\n}\n.wrapper .side-bar .content .body ul[data-v-6d0f1056] {\n  display: flex;\n  flex-direction: column;\n}\n.wrapper .side-bar .content .body ul .sub-menu[data-v-6d0f1056] {\n  border-top: 1px solid #ccc;\n}\n.wrapper .side-bar .content .body ul .link-dark span[data-v-6d0f1056] {\n  display: block;\n  font-size: 1rem;\n  font-weight: bold;\n  font-family: sans-serif;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  padding: 0 2rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n  transition: 0.25s;\n}\n.wrapper .side-bar .content .body ul .link-dark span[data-v-6d0f1056]:hover {\n  color: #10b981;\n}\n.wrapper .side-bar .content .body ul .link-dark span:hover .dark-icon[data-v-6d0f1056]  path,\n.wrapper .side-bar .content .body ul .link-dark span:hover .dark-arrow[data-v-6d0f1056]  path {\n  fill: #10b981;\n}\n.wrapper .side-bar .content .body ul .link-dark span .dark-icon[data-v-6d0f1056] {\n  width: 1rem;\n  height: auto;\n  margin-right: 0.5rem;\n  margin-bottom: 6px;\n}\n.wrapper .side-bar .content .body ul .link-dark span .dark-icon[data-v-6d0f1056]  path {\n  fill: #4b5563;\n}\n.wrapper .side-bar .content .body ul .link-dark span .dark-arrow[data-v-6d0f1056] {\n  margin-left: 5px;\n}\n.wrapper .side-bar .content .body ul .link-dark.offer .dark-icon[data-v-6d0f1056] {\n  color: #ef4444;\n}\n.wrapper .side-bar .content .body ul .link-dark.offer .dark-icon[data-v-6d0f1056]  path {\n  fill: none;\n}\n.wrapper .side-bar .content .body ul .link-dark.offer:hover .dark-icon[data-v-6d0f1056] {\n  color: #10b981;\n}\n.wrapper .side-bar .content .body ul .link-dark.offer:hover .dark-icon[data-v-6d0f1056]  path {\n  fill: none;\n}\n.wrapper .summary-cart[data-v-6d0f1056] {\n  position: fixed;\n  right: 0;\n  top: 50%;\n  z-index: 50;\n}\n@-webkit-keyframes live-data-v-6d0f1056 {\n0%, 80%, 100% {\n    transform: scale(0.6);\n}\n40% {\n    transform: scale(1);\n}\n}\n@keyframes live-data-v-6d0f1056 {\n0%, 80%, 100% {\n    transform: scale(0.6);\n}\n40% {\n    transform: scale(1);\n}\n}\n.cart-enter-active[data-v-6d0f1056],\n.cart-leave-active[data-v-6d0f1056] {\n  transition: transform 0.5s ease-out;\n}\n.cart-enter[data-v-6d0f1056],\n.cart-leave-to[data-v-6d0f1056] {\n  transform: translateX(100%);\n}\n.side-bar-enter-active[data-v-6d0f1056],\n.side-bar-leave-active[data-v-6d0f1056] {\n  transition: transform 0.5s ease-out;\n}\n.side-bar-enter[data-v-6d0f1056],\n.side-bar-leave-to[data-v-6d0f1056] {\n  transform: translateX(-100%);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Navigation.vue?vue&type=style&index=0&id=6d0f1056&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Navigation.vue?vue&type=style&index=0&id=6d0f1056&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_6d0f1056_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=6d0f1056&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Navigation.vue?vue&type=style&index=0&id=6d0f1056&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_6d0f1056_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_6d0f1056_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Vue/components/Navigation.vue":
/*!****************************************************!*\
  !*** ./resources/js/Vue/components/Navigation.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_6d0f1056_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=6d0f1056&scoped=true& */ "./resources/js/Vue/components/Navigation.vue?vue&type=template&id=6d0f1056&scoped=true&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/Vue/components/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _Navigation_vue_vue_type_style_index_0_id_6d0f1056_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.vue?vue&type=style&index=0&id=6d0f1056&lang=scss&scoped=true& */ "./resources/js/Vue/components/Navigation.vue?vue&type=style&index=0&id=6d0f1056&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_6d0f1056_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_6d0f1056_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6d0f1056",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Vue/components/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Vue/components/Navigation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Vue/components/Navigation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Navigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Vue/components/Navigation.vue?vue&type=style&index=0&id=6d0f1056&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/Vue/components/Navigation.vue?vue&type=style&index=0&id=6d0f1056&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_6d0f1056_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=6d0f1056&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Navigation.vue?vue&type=style&index=0&id=6d0f1056&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Vue/components/Navigation.vue?vue&type=template&id=6d0f1056&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Vue/components/Navigation.vue?vue&type=template&id=6d0f1056&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_6d0f1056_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_6d0f1056_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_6d0f1056_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=6d0f1056&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Navigation.vue?vue&type=template&id=6d0f1056&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Navigation.vue?vue&type=template&id=6d0f1056&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Navigation.vue?vue&type=template&id=6d0f1056&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.mobile,
            expression: "mobile",
          },
        ],
        staticClass: "mobile",
      },
      [
        _c("div", { staticClass: "nav-bar" }, [
          _c(
            "div",
            {
              staticClass: "bar-btn signal-icon",
              on: { click: _vm.toggleSideBar },
            },
            [
              _c("svg-vue", {
                staticClass: "light-icon",
                attrs: { icon: "bars" },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "home signal-icon" },
            [
              _c(
                "router-link",
                { attrs: { to: { name: "Home" } } },
                [
                  _c("svg-vue", {
                    staticClass: "light-icon",
                    attrs: { icon: "home" },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "notification signal-icon" },
            [
              _c("svg-vue", {
                staticClass: "light-icon",
                attrs: { icon: "notification" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "sub-info" }, [_vm._v("1")]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "cart signal-icon", on: { click: _vm.toggleCart } },
            [
              _c("svg-vue", {
                staticClass: "light-icon",
                attrs: { icon: "cart" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "sub-info" }, [
                _vm._v(_vm._s(_vm.totalItems)),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "account signal-icon" }, [
            !_vm.isLogin
              ? _c(
                  "div",
                  { on: { click: _vm.toggleAccount } },
                  [
                    _c("svg-vue", {
                      staticClass: "light-icon",
                      attrs: { icon: "user" },
                    }),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isLogin
              ? _c(
                  "div",
                  { staticClass: "hasLogin" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "UserDashBoard" } } },
                      [
                        _c("div", { staticClass: "image" }, [
                          _c("img", {
                            attrs: { src: _vm.userAvatar, alt: "user" },
                          }),
                        ]),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "search-mobile" }, [
          _c("div", { staticClass: "search" }, [
            _c("form", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.searchText,
                    expression: "searchText",
                  },
                ],
                attrs: {
                  type: "text",
                  placeholder: "Search for products ( e.g. fish, oil )",
                },
                domProps: { value: _vm.searchText },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.searchText = $event.target.value
                  },
                },
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.submitSearch.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("svg-vue", {
                    staticClass: "dark-icon",
                    attrs: { icon: "search" },
                  }),
                ],
                1
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "side-bar" },
          [
            _c("div", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.mobileSideBar,
                  expression: "mobileSideBar",
                },
              ],
              staticClass: "drawer",
              on: { click: _vm.toggleSideBar },
            }),
            _vm._v(" "),
            _c("transition", { attrs: { name: "side-bar" } }, [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.mobileSideBar,
                      expression: "mobileSideBar",
                    },
                  ],
                  staticClass: "content",
                },
                [
                  _c("div", { staticClass: "header" }, [
                    _c(
                      "div",
                      {
                        staticClass: "branding",
                        on: { click: _vm.toggleSideBar },
                      },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "logo",
                            attrs: { to: { name: "Home" } },
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: "/images/light-logo.png",
                                alt: "logo",
                              },
                            }),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "close-side-bar-btn",
                        on: { click: _vm.toggleSideBar },
                      },
                      [
                        _c("svg-vue", {
                          staticClass: "dark-icon",
                          attrs: { icon: "times" },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "body" }, [
                    _c("ul", [
                      _c(
                        "div",
                        { on: { click: _vm.toggleSideBar } },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "link-dark",
                              attrs: { to: { name: "Home" } },
                            },
                            [
                              _c(
                                "span",
                                [
                                  _c("svg-vue", {
                                    staticClass: "dark-icon",
                                    attrs: { icon: "home" },
                                  }),
                                  _vm._v("Home"),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "link-dark categories" }, [
                        _c("div", { on: { click: _vm.toggleCategories } }, [
                          _c(
                            "span",
                            [
                              _c("svg-vue", {
                                staticClass: "dark-icon",
                                attrs: { icon: "categories" },
                              }),
                              _vm._v(
                                "\n                    Categories\n                    "
                              ),
                              !_vm.showCategories
                                ? _c("svg-vue", {
                                    staticClass: "dark-arrow",
                                    attrs: { icon: "right-arrow" },
                                  })
                                : _c("svg-vue", {
                                    staticClass: "dark-arrow",
                                    attrs: { icon: "down-arrow" },
                                  }),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.showCategories,
                                expression: "showCategories",
                              },
                            ],
                            staticClass: "sub-menu",
                          },
                          [
                            _c("ListCategories", {
                              on: { toggleSideBar: _vm.toggleSideBar },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { on: { click: _vm.toggleSideBar } },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "link-dark",
                              attrs: { to: { name: "AboutUs" } },
                            },
                            [
                              _c(
                                "span",
                                [
                                  _c("svg-vue", {
                                    staticClass: "dark-icon",
                                    attrs: { icon: "users" },
                                  }),
                                  _vm._v("About\n                    us"),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { on: { click: _vm.toggleSideBar } },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "link-dark",
                              attrs: { to: { name: "ContactUs" } },
                            },
                            [
                              _c(
                                "span",
                                [
                                  _c("svg-vue", {
                                    staticClass: "dark-icon",
                                    attrs: { icon: "phone-go" },
                                  }),
                                  _vm._v("\n                    Contact Us"),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { on: { click: _vm.toggleSideBar } },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "link-dark offer",
                              attrs: { to: { name: "Offer" } },
                            },
                            [
                              _c(
                                "span",
                                [
                                  _c("svg-vue", {
                                    staticClass: "dark-icon",
                                    attrs: { icon: "giftbox" },
                                  }),
                                  _vm._v("Offers"),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { on: { click: _vm.toggleSideBar } },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "link-dark",
                              attrs: { to: { name: "PrivacyPolicy" } },
                            },
                            [
                              _c(
                                "span",
                                [
                                  _c("svg-vue", {
                                    staticClass: "dark-icon",
                                    attrs: { icon: "guard" },
                                  }),
                                  _vm._v("Privacy\n                    Policy"),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { on: { click: _vm.toggleSideBar } },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "link-dark",
                              attrs: { to: { name: "TermCondition" } },
                            },
                            [
                              _c(
                                "span",
                                [
                                  _c("svg-vue", {
                                    staticClass: "dark-icon",
                                    attrs: { icon: "terms" },
                                  }),
                                  _vm._v(
                                    "Terms &\n                    Conditions"
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]
              ),
            ]),
          ],
          1
        ),
      ]
    ),
    _vm._v(" "),
    !_vm.mobile
      ? _c("div", { staticClass: "header" }, [
          _c(
            "div",
            { staticClass: "branding" },
            [
              _c(
                "router-link",
                { staticClass: "logo", attrs: { to: { name: "Home" } } },
                [
                  _c("img", {
                    attrs: { src: "/images/light-logo.png", alt: "logo" },
                  }),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "search" }, [
            _c("form", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.searchText,
                    expression: "searchText",
                  },
                ],
                attrs: {
                  type: "text",
                  placeholder: "Search for products ( e.g. fish, oil )",
                },
                domProps: { value: _vm.searchText },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.searchText = $event.target.value
                  },
                },
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.submitSearch.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("svg-vue", {
                    staticClass: "dark-icon",
                    attrs: { icon: "search" },
                  }),
                ],
                1
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "user-feature" }, [
            _c(
              "div",
              { staticClass: "notification signal-icon" },
              [
                _c("svg-vue", {
                  staticClass: "light-icon",
                  attrs: { icon: "notification" },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "sub-info" }, [_vm._v("1")]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "cart signal-icon",
                on: { click: _vm.toggleCart },
              },
              [
                _c("svg-vue", {
                  staticClass: "light-icon",
                  attrs: { icon: "cart" },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "sub-info" }, [
                  _vm._v(_vm._s(_vm.totalItems)),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "account signal-icon" }, [
              !_vm.isLogin
                ? _c(
                    "div",
                    { on: { click: _vm.toggleAccount } },
                    [
                      _c("svg-vue", {
                        staticClass: "light-icon",
                        attrs: { icon: "user" },
                      }),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isLogin
                ? _c(
                    "div",
                    { staticClass: "hasLogin" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: "UserDashBoard" } } },
                        [
                          _c("div", { staticClass: "image" }, [
                            _c("img", {
                              attrs: { src: _vm.userAvatar, alt: "user" },
                            }),
                          ]),
                        ]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ]),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.mobile
      ? _c("div", { staticClass: "footer" }, [
          _c("div", { staticClass: "nav-links" }, [
            _c(
              "ul",
              [
                _c(
                  "router-link",
                  { staticClass: "link-dark", attrs: { to: { name: "Home" } } },
                  [_c("span", [_vm._v("Home")])]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    ref: "dekstopCategories",
                    staticClass: "link-dark categories",
                  },
                  [
                    _c(
                      "div",
                      { on: { click: _vm.toggleCategories } },
                      [
                        _vm._v("\n            Categories\n            "),
                        _c("svg-vue", {
                          staticClass: "dark-arrow",
                          attrs: { icon: "down-arrow" },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showCategories,
                            expression: "showCategories",
                          },
                        ],
                        staticClass: "sub-menu",
                      },
                      [
                        _c("ListCategories", {
                          on: { toggleCategories: _vm.toggleCategories },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "link-dark",
                    attrs: { to: { name: "AboutUs" } },
                  },
                  [_c("span", [_vm._v("About us")])]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "link-dark",
                    attrs: { to: { name: "ContactUs" } },
                  },
                  [_c("span", [_vm._v("Contact Us")])]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "link-dark offer",
                    attrs: { to: { name: "Offer" } },
                  },
                  [_c("span", [_vm._v("Offers")])]
                ),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "more-info" },
            [
              _c(
                "router-link",
                {
                  staticClass: "link-dark",
                  attrs: { to: { name: "PrivacyPolicy" } },
                },
                [_vm._v("Privacy Policy\n      ")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "link-dark",
                  attrs: { to: { name: "TermCondition" } },
                },
                [_vm._v("Terms & Conditions\n      ")]
              ),
            ],
            1
          ),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "cart" },
      [
        _c("div", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showCart,
              expression: "showCart",
            },
          ],
          staticClass: "drawer",
          on: { click: _vm.toggleCart },
        }),
        _vm._v(" "),
        _c(
          "transition",
          { attrs: { name: "cart" } },
          [
            _c("CartCheckOut", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showCart,
                  expression: "showCart",
                },
              ],
              on: {
                toggleCart: _vm.toggleCart,
                toggleAccount: _vm.toggleAccount,
              },
            }),
          ],
          1
        ),
      ],
      1
    ),
    _vm._v(" "),
    !_vm.mobile
      ? _c(
          "div",
          { staticClass: "summary-cart" },
          [_c("SummaryCart", { on: { toggleCart: _vm.toggleCart } })],
          1
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);