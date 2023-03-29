"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Vue_components_Account_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Account.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Account.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Account",
  data: function data() {
    return {
      showLogin: null,
      loginEmail: "",
      loginPassword: "",
      signupUserName: "",
      signupEmail: "",
      signupPassword: "",
      signupConfimation: ""
    };
  },
  methods: _objectSpread(_objectSpread({
    toggleAccount: function toggleAccount() {
      this.$emit("toggleAccount");
    },
    toggleShowLogin: function toggleShowLogin() {
      this.showLogin = !this.showLogin;
    },
    onSuccess: function onSuccess(googleUser) {
      console.log(googleUser); // This only gets the user information: id, name, imageUrl and email

      console.log(googleUser.getBasicProfile());
    },
    AuthProvider: function AuthProvider(provider) {
      var self = this;
      this.$auth.authenticate(provider).then(function (response) {
        self.SocialLogin(provider, response);
      })["catch"](function (err) {
        console.log({
          err: err
        });
      });
    },
    SocialLogin: function SocialLogin(provider, response) {
      var _this = this;

      this.$http.post("/api/login/socialite/" + provider, response).then(function (response) {
        _this.toggleAccount();

        _this.setCookie({
          name: "usertoken",
          value: response.data.token,
          date: 30
        });

        _this.setCookie({
          name: "useravatar",
          value: response.data.user.image,
          date: 30
        });

        _this.setCookie({
          name: "useremail",
          value: response.data.user.email,
          date: 30
        });

        _this.setCookie({
          name: "userid",
          value: response.data.user.id,
          date: 30
        });

        _this.setCookie({
          name: "username",
          value: response.data.user.name,
          date: 30
        });

        _this.setCookie({
          name: "userphone",
          value: response.data.user.phone,
          date: 30
        });

        _this.setCookie({
          name: "useraddress",
          value: response.data.user.address,
          date: 30
        });

        _this.setCookie({
          name: "userprovider",
          value: response.data.user.provider,
          date: 30
        });

        _this.setDataAfterAuth(response);

        _this.$toaster.success("Successfully login");
      })["catch"](function (err) {
        _this.$toaster.error("Error login");
      });
    },
    normalLogin: function normalLogin() {
      var _this2 = this;

      var obj = {
        email: this.loginEmail,
        password: this.loginPassword
      };
      this.login(obj).then(function (res) {
        _this2.toggleAccount();

        _this2.$toaster.success("Successfully login");
      })["catch"](function (err) {
        _this2.$toaster.error("Email or Password not correct!");
      });
    },
    signup: function signup() {
      var _this3 = this;

      var obj = {
        name: this.signupUserName,
        email: this.signupEmail,
        password: this.signupPassword,
        password_confirmation: this.signupConfimation,
        role: "user"
      };
      this.register(obj).then(function (res) {
        _this3.toggleAccount();

        _this3.$toaster.success("Successfully register");
      })["catch"](function (err) {
        console.log(err);

        _this3.$toaster.error("Please check carefully all information !");
      });
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["setDataAfterAuth", "setCookie"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["login", "register"])),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["isLogin"]))
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Account.vue?vue&type=style&index=0&id=4c18d0db&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Account.vue?vue&type=style&index=0&id=4c18d0db&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".account-container[data-v-4c18d0db] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n}\n.account-container .close[data-v-4c18d0db] {\n  position: absolute;\n  right: 1.5rem;\n  top: 1.5rem;\n  width: 35px;\n  height: 35px;\n  z-index: 999;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.25s;\n}\n.account-container .close[data-v-4c18d0db]:hover {\n  background-color: #fecaca;\n}\n.account-container .close .dark-icon[data-v-4c18d0db] {\n  width: 10px;\n  height: 10px;\n  display: block;\n}\n.account-container .close .dark-icon[data-v-4c18d0db]  path {\n  fill: #ef4444;\n}\n.account-container .content[data-v-4c18d0db] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 150;\n  max-width: 500px;\n  height: 95%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n}\n.account-container .content .login[data-v-4c18d0db],\n.account-container .content .signup[data-v-4c18d0db] {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  text-align: center;\n  padding: 1rem 2rem;\n  background-color: #fff;\n  border-radius: 10px;\n}\n.account-container .content .login[data-v-4c18d0db]::-webkit-scrollbar,\n.account-container .content .signup[data-v-4c18d0db]::-webkit-scrollbar {\n  display: none;\n}\n.account-container .content .login .title[data-v-4c18d0db],\n.account-container .content .signup .title[data-v-4c18d0db] {\n  font-family: sans-serif;\n  font-weight: 550;\n  color: #000;\n  font-size: 1.875rem;\n  width: 100%;\n}\n.account-container .content .login .description[data-v-4c18d0db],\n.account-container .content .signup .description[data-v-4c18d0db] {\n  color: #6b7280;\n  line-height: 2.5rem;\n  font-size: 0.97rem;\n  width: 100%;\n}\n.account-container .content .login form[data-v-4c18d0db],\n.account-container .content .signup form[data-v-4c18d0db] {\n  width: 100%;\n}\n.account-container .content .login form p[data-v-4c18d0db],\n.account-container .content .signup form p[data-v-4c18d0db] {\n  text-align: left;\n  color: #6b7280;\n  font-size: 0.9rem;\n  line-height: 2rem;\n  width: 100%;\n  margin-top: 0.5rem;\n}\n.account-container .content .login form .input[data-v-4c18d0db],\n.account-container .content .signup form .input[data-v-4c18d0db] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem;\n  border-radius: 7px;\n  border: 1px solid #eee;\n}\n.account-container .content .login form .input[data-v-4c18d0db]:focus-within,\n.account-container .content .signup form .input[data-v-4c18d0db]:focus-within {\n  border-color: #10b981;\n}\n.account-container .content .login form .input input[data-v-4c18d0db],\n.account-container .content .signup form .input input[data-v-4c18d0db] {\n  flex: 1;\n  margin-left: 0.5rem;\n  font-size: 0.9rem;\n  color: #6b7280;\n}\n.account-container .content .login form .input input[data-v-4c18d0db]::-moz-placeholder, .account-container .content .signup form .input input[data-v-4c18d0db]::-moz-placeholder {\n  color: rgba(107, 114, 128, 0.3);\n}\n.account-container .content .login form .input input[data-v-4c18d0db]:-ms-input-placeholder, .account-container .content .signup form .input input[data-v-4c18d0db]:-ms-input-placeholder {\n  color: rgba(107, 114, 128, 0.3);\n}\n.account-container .content .login form .input input[data-v-4c18d0db]::placeholder,\n.account-container .content .signup form .input input[data-v-4c18d0db]::placeholder {\n  color: rgba(107, 114, 128, 0.3);\n}\n.account-container .content .login form .input input .dark-icon[data-v-4c18d0db],\n.account-container .content .signup form .input input .dark-icon[data-v-4c18d0db] {\n  width: 12px;\n  height: 12px;\n}\n.account-container .content .login form .action[data-v-4c18d0db],\n.account-container .content .signup form .action[data-v-4c18d0db] {\n  border: none;\n  margin: 0.5rem 0;\n  padding: 0.7rem 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.account-container .content .login form .action .remember .switch[data-v-4c18d0db],\n.account-container .content .signup form .action .remember .switch[data-v-4c18d0db] {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 25px;\n}\n.account-container .content .login form .action .remember .slider[data-v-4c18d0db],\n.account-container .content .signup form .action .remember .slider[data-v-4c18d0db] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.account-container .content .login form .action .remember .slider[data-v-4c18d0db]:before,\n.account-container .content .signup form .action .remember .slider[data-v-4c18d0db]:before {\n  position: absolute;\n  top: 4px;\n  left: 5px;\n  content: \"\";\n  height: 17px;\n  width: 17px;\n  background-color: white;\n  transition: 0.4s;\n}\n.account-container .content .login form .action .remember input:checked + .slider[data-v-4c18d0db],\n.account-container .content .signup form .action .remember input:checked + .slider[data-v-4c18d0db] {\n  background-color: #10b981;\n}\n.account-container .content .login form .action .remember input:checked + .slider[data-v-4c18d0db]:before,\n.account-container .content .signup form .action .remember input:checked + .slider[data-v-4c18d0db]:before {\n  transform: translateX(30px);\n}\n.account-container .content .login form .action .remember .slider.round[data-v-4c18d0db],\n.account-container .content .signup form .action .remember .slider.round[data-v-4c18d0db] {\n  border-radius: 34px;\n}\n.account-container .content .login form .action .remember .slider.round[data-v-4c18d0db]:before,\n.account-container .content .signup form .action .remember .slider.round[data-v-4c18d0db]:before {\n  border-radius: 50%;\n}\n.account-container .content .login form .action .forgot-password[data-v-4c18d0db],\n.account-container .content .signup form .action .forgot-password[data-v-4c18d0db] {\n  color: #000;\n  text-decoration: underline;\n  font-size: 0.9rem;\n  transition: 0.25s;\n}\n.account-container .content .login form .action .forgot-password[data-v-4c18d0db]:hover,\n.account-container .content .signup form .action .forgot-password[data-v-4c18d0db]:hover {\n  text-decoration: none;\n}\n.account-container .content .login form .submit button[data-v-4c18d0db],\n.account-container .content .signup form .submit button[data-v-4c18d0db] {\n  display: block;\n  width: 100%;\n  padding: 1rem;\n  background-color: #10b981;\n  border-radius: 5px;\n  font-size: 1rem;\n  color: #fff;\n  font-family: sans-serif;\n  cursor: pointer;\n  transition: 0.25s;\n}\n.account-container .content .login form .submit button[data-v-4c18d0db]:hover,\n.account-container .content .signup form .submit button[data-v-4c18d0db]:hover {\n  background-color: #059669;\n}\n.account-container .content .login small[data-v-4c18d0db],\n.account-container .content .signup small[data-v-4c18d0db] {\n  display: block;\n  margin: 1rem;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n.account-container .content .login .others[data-v-4c18d0db],\n.account-container .content .signup .others[data-v-4c18d0db] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 1rem;\n}\n@media (max-width: 1024px) {\n.account-container .content .login .others[data-v-4c18d0db],\n.account-container .content .signup .others[data-v-4c18d0db] {\n    grid-template-columns: repeat(1, 1fr);\n}\n}\n.account-container .content .login .others .facebook[data-v-4c18d0db],\n.account-container .content .login .others .google[data-v-4c18d0db],\n.account-container .content .signup .others .facebook[data-v-4c18d0db],\n.account-container .content .signup .others .google[data-v-4c18d0db] {\n  background-color: #f3f4f6;\n  padding: 1rem;\n  color: #4b5563;\n  font-weight: 600;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  transition: 0.25s;\n  border-radius: 7px;\n  cursor: pointer;\n}\n@media (max-width: 1024px) {\n.account-container .content .login .others .facebook[data-v-4c18d0db],\n.account-container .content .login .others .google[data-v-4c18d0db],\n.account-container .content .signup .others .facebook[data-v-4c18d0db],\n.account-container .content .signup .others .google[data-v-4c18d0db] {\n    justify-content: center;\n}\n}\n.account-container .content .login .others .facebook[data-v-4c18d0db]:hover,\n.account-container .content .login .others .google[data-v-4c18d0db]:hover,\n.account-container .content .signup .others .facebook[data-v-4c18d0db]:hover,\n.account-container .content .signup .others .google[data-v-4c18d0db]:hover {\n  color: #fff;\n}\n.account-container .content .login .others .facebook:hover .icon[data-v-4c18d0db]  path,\n.account-container .content .login .others .google:hover .icon[data-v-4c18d0db]  path,\n.account-container .content .signup .others .facebook:hover .icon[data-v-4c18d0db]  path,\n.account-container .content .signup .others .google:hover .icon[data-v-4c18d0db]  path {\n  fill: #fff;\n}\n.account-container .content .login .others .facebook .icon[data-v-4c18d0db],\n.account-container .content .login .others .google .icon[data-v-4c18d0db],\n.account-container .content .signup .others .facebook .icon[data-v-4c18d0db],\n.account-container .content .signup .others .google .icon[data-v-4c18d0db] {\n  width: 16px;\n  height: 18px;\n  margin-right: 0.5rem;\n}\n.account-container .content .login .others .facebook .icon[data-v-4c18d0db]  path,\n.account-container .content .login .others .google .icon[data-v-4c18d0db]  path,\n.account-container .content .signup .others .facebook .icon[data-v-4c18d0db]  path,\n.account-container .content .signup .others .google .icon[data-v-4c18d0db]  path {\n  fill: #4b5563;\n}\n.account-container .content .login .others .facebook[data-v-4c18d0db]:hover,\n.account-container .content .signup .others .facebook[data-v-4c18d0db]:hover {\n  background-color: #2563eb;\n}\n.account-container .content .login .others .google[data-v-4c18d0db]:hover,\n.account-container .content .signup .others .google[data-v-4c18d0db]:hover {\n  background-color: #ef4444;\n}\n.account-container .content .login .suggest[data-v-4c18d0db],\n.account-container .content .signup .suggest[data-v-4c18d0db] {\n  margin: 1rem 0;\n  color: #6b7280;\n  font-size: 0.85rem;\n}\n.account-container .content .login .suggest span[data-v-4c18d0db],\n.account-container .content .signup .suggest span[data-v-4c18d0db] {\n  font-size: 1rem;\n  color: #000;\n  font-weight: 600;\n  cursor: pointer;\n  margin-left: 0.5rem;\n}\n.account-container .content .login .suggest span[data-v-4c18d0db]:hover,\n.account-container .content .signup .suggest span[data-v-4c18d0db]:hover {\n  color: #10b981;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Account.vue?vue&type=style&index=0&id=4c18d0db&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Account.vue?vue&type=style&index=0&id=4c18d0db&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_4c18d0db_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Account.vue?vue&type=style&index=0&id=4c18d0db&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Account.vue?vue&type=style&index=0&id=4c18d0db&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_4c18d0db_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_4c18d0db_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Vue/components/Account.vue":
/*!*************************************************!*\
  !*** ./resources/js/Vue/components/Account.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Account_vue_vue_type_template_id_4c18d0db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account.vue?vue&type=template&id=4c18d0db&scoped=true& */ "./resources/js/Vue/components/Account.vue?vue&type=template&id=4c18d0db&scoped=true&");
/* harmony import */ var _Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Account.vue?vue&type=script&lang=js& */ "./resources/js/Vue/components/Account.vue?vue&type=script&lang=js&");
/* harmony import */ var _Account_vue_vue_type_style_index_0_id_4c18d0db_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Account.vue?vue&type=style&index=0&id=4c18d0db&lang=scss&scoped=true& */ "./resources/js/Vue/components/Account.vue?vue&type=style&index=0&id=4c18d0db&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Account_vue_vue_type_template_id_4c18d0db_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Account_vue_vue_type_template_id_4c18d0db_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4c18d0db",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Vue/components/Account.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Vue/components/Account.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Vue/components/Account.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Account.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Account.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Vue/components/Account.vue?vue&type=style&index=0&id=4c18d0db&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Vue/components/Account.vue?vue&type=style&index=0&id=4c18d0db&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_4c18d0db_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Account.vue?vue&type=style&index=0&id=4c18d0db&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Account.vue?vue&type=style&index=0&id=4c18d0db&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Vue/components/Account.vue?vue&type=template&id=4c18d0db&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Vue/components/Account.vue?vue&type=template&id=4c18d0db&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_4c18d0db_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_4c18d0db_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_4c18d0db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Account.vue?vue&type=template&id=4c18d0db&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Account.vue?vue&type=template&id=4c18d0db&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Account.vue?vue&type=template&id=4c18d0db&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Account.vue?vue&type=template&id=4c18d0db&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return !_vm.isLogin
    ? _c("div", { staticClass: "account-container" }, [
        _c("div", { staticClass: "drawer", on: { click: _vm.toggleAccount } }, [
          _vm._v("Trung Kien"),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "close", on: { click: _vm.toggleAccount } },
          [
            _c("svg-vue", {
              staticClass: "dark-icon",
              attrs: { icon: "times", viewBox: " 7 7  10 10" },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "content" }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.showLogin,
                  expression: "!showLogin",
                },
              ],
              staticClass: "login",
            },
            [
              _c("h1", { staticClass: "title" }, [_vm._v("Login")]),
              _vm._v(" "),
              _c("p", { staticClass: "description" }, [
                _vm._v("Login with your email and password"),
              ]),
              _vm._v(" "),
              _c("form", [
                _c("p", [_vm._v("Email")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "input" },
                  [
                    _c("svg-vue", {
                      staticClass: "dark-icon",
                      attrs: { icon: "email", viewBox: "0 -10 100 100" },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.loginEmail,
                          expression: "loginEmail",
                        },
                      ],
                      attrs: { type: "email", placeholder: "Email" },
                      domProps: { value: _vm.loginEmail },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.loginEmail = $event.target.value
                        },
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("p", [_vm._v("Password")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "input" },
                  [
                    _c("svg-vue", {
                      staticClass: "dark-icon",
                      attrs: { icon: "lock", viewBox: "0 0 550 550" },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.loginPassword,
                          expression: "loginPassword",
                        },
                      ],
                      attrs: { type: "password", placeholder: "Password" },
                      domProps: { value: _vm.loginPassword },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.loginPassword = $event.target.value
                        },
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "action" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      { staticClass: "forgot-password", attrs: { to: "" } },
                      [_vm._v("\n            Forgot Password ?\n          ")]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "submit",
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.normalLogin.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _c("button", { attrs: { type: "submit" } }, [
                      _vm._v("Login"),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("small", [_vm._v("or")]),
              _vm._v(" "),
              _c("div", { staticClass: "others" }, [
                _c(
                  "div",
                  {
                    staticClass: "facebook",
                    on: {
                      click: function ($event) {
                        return _vm.AuthProvider("facebook")
                      },
                    },
                  },
                  [
                    _c("svg-vue", {
                      staticClass: "icon",
                      attrs: { icon: "facebook-nocolor" },
                    }),
                    _vm._v("\n          Login with Facebook\n        "),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "google",
                    on: {
                      click: function ($event) {
                        return _vm.AuthProvider("google")
                      },
                    },
                  },
                  [
                    _c("svg-vue", {
                      staticClass: "icon",
                      attrs: { icon: "google-nocolor", viewBox: "0 -5 24 24" },
                    }),
                    _vm._v("\n          Login with google\n        "),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "suggest", on: { click: _vm.toggleShowLogin } },
                [
                  _vm._v("\n        Not have a accout ? "),
                  _c("span", [_vm._v("Register now")]),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showLogin,
                  expression: "showLogin",
                },
              ],
              staticClass: "signup",
            },
            [
              _c("h1", { staticClass: "title" }, [_vm._v("Signing Up")]),
              _vm._v(" "),
              _c("p", { staticClass: "description" }, [
                _vm._v("Create an account"),
              ]),
              _vm._v(" "),
              _c("form", [
                _c("p", [_vm._v("Name")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "input" },
                  [
                    _c("svg-vue", {
                      staticClass: "dark-icon",
                      attrs: { icon: "user-nocolor" },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.signupUserName,
                          expression: "signupUserName",
                        },
                      ],
                      attrs: { type: "text", placeholder: "Full name" },
                      domProps: { value: _vm.signupUserName },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.signupUserName = $event.target.value
                        },
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("p", [_vm._v("Email")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "input" },
                  [
                    _c("svg-vue", {
                      staticClass: "dark-icon",
                      attrs: { icon: "email", viewBox: "0 -10 100 100" },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.signupEmail,
                          expression: "signupEmail",
                        },
                      ],
                      attrs: { type: "email", placeholder: "Email" },
                      domProps: { value: _vm.signupEmail },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.signupEmail = $event.target.value
                        },
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("p", [_vm._v("Password")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "input" },
                  [
                    _c("svg-vue", {
                      staticClass: "dark-icon",
                      attrs: { icon: "lock", viewBox: "0 0 550 550" },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.signupPassword,
                          expression: "signupPassword",
                        },
                      ],
                      attrs: {
                        type: "password",
                        placeholder: "Password ( similar with Trungkien_98 )",
                      },
                      domProps: { value: _vm.signupPassword },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.signupPassword = $event.target.value
                        },
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("p", [_vm._v("Confimation")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "input" },
                  [
                    _c("svg-vue", {
                      staticClass: "dark-icon",
                      attrs: { icon: "lock", viewBox: "0 0 550 550" },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.signupConfimation,
                          expression: "signupConfimation",
                        },
                      ],
                      attrs: {
                        type: "password",
                        placeholder: "Password Confimation",
                      },
                      domProps: { value: _vm.signupConfimation },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.signupConfimation = $event.target.value
                        },
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "action" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      { staticClass: "forgot-password", attrs: { to: "" } },
                      [_vm._v("\n            Forgot Password ?\n          ")]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "submit" }, [
                  _c(
                    "button",
                    {
                      attrs: { type: "submit" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.signup.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("Register")]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("small", [_vm._v("or")]),
              _vm._v(" "),
              _c("div", { staticClass: "others" }, [
                _c(
                  "div",
                  {
                    staticClass: "facebook",
                    on: {
                      click: function ($event) {
                        return _vm.AuthProvider("facebook")
                      },
                    },
                  },
                  [
                    _c("svg-vue", {
                      staticClass: "icon",
                      attrs: { icon: "facebook-nocolor" },
                    }),
                    _vm._v("\n          Login with Facebook\n        "),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "google",
                    on: {
                      click: function ($event) {
                        return _vm.AuthProvider("google")
                      },
                    },
                  },
                  [
                    _c("svg-vue", {
                      staticClass: "icon",
                      attrs: { icon: "google-nocolor", viewBox: "0 -5 24 24" },
                    }),
                    _vm._v("\n          Login with google\n        "),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "suggest", on: { click: _vm.toggleShowLogin } },
                [
                  _vm._v("\n        Already have a accout ? "),
                  _c("span", [_vm._v("Login now")]),
                ]
              ),
            ]
          ),
        ]),
      ])
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "remember" }, [
      _c("label", { staticClass: "switch" }, [
        _c("input", { attrs: { type: "checkbox" } }),
        _c("span", { staticClass: "slider round" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "remember" }, [
      _c("label", { staticClass: "switch" }, [
        _c("input", { attrs: { type: "checkbox" } }),
        _c("span", { staticClass: "slider round" }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);