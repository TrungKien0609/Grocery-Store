"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Vue_views_UserDashBoard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/UserDashBoard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/UserDashBoard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserDashBoard",
  created: function created() {
    this.getOrderInfo();
  },
  updated: function updated() {
    this.getOrderInfo();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["logout", "getOrderInfo"])), {}, {
    logoutUser: function logoutUser() {
      var _this = this;

      this.logout()["catch"](function (err) {
        _this.$toaster.error("Some thing went wrong. Try again later on");
      });
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["userProvider"]))
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/UserDashBoard.vue?vue&type=style&index=0&id=08d53d9e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/UserDashBoard.vue?vue&type=style&index=0&id=08d53d9e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".user-container[data-v-08d53d9e] {\n  display: flex;\n  justify-content: space-between;\n  gap: 2.5rem;\n  background-color: #f9fafb;\n  padding: 2.5rem;\n}\n@media (max-width: 1024px) {\n.user-container[data-v-08d53d9e] {\n    flex-direction: column;\n}\n}\n@media (max-width: 600px) {\n.user-container[data-v-08d53d9e] {\n    padding: 2.5rem 1rem;\n}\n}\n.user-container .dash-board[data-v-08d53d9e] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 138px;\n  width: 100%;\n  max-width: 300px;\n  min-width: 300px;\n  max-height: 300px;\n  background-color: #fff;\n  border-radius: 7px;\n  padding: 1rem 2.5rem;\n}\n@media (max-width: 1024px) {\n.user-container .dash-board[data-v-08d53d9e] {\n    flex-direction: column;\n    max-width: 100%;\n    position: initial;\n}\n}\n@media (max-width: 600px) {\n.user-container .dash-board[data-v-08d53d9e] {\n    padding: 1rem;\n}\n}\n.user-container .dash-board .name[data-v-08d53d9e] {\n  width: 100%;\n  margin: 1rem 0;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 0.92rem;\n  padding: 0.5rem;\n  color: #000;\n  border-radius: 5px;\n  transition: 0.25s;\n  cursor: pointer;\n}\n.user-container .dash-board .name .dark-icon[data-v-08d53d9e] {\n  width: 16px;\n  height: auto;\n  margin-right: 0.5rem;\n  margin-top: 2px;\n}\n.user-container .dash-board .name .dark-icon[data-v-08d53d9e]  path {\n  fill: transparent;\n  color: #333;\n}\n.user-container .dash-board .name[data-v-08d53d9e]:hover {\n  background-color: #f9fafb;\n  color: #10b981;\n}\n.user-container .dash-board .name:hover .dark-icon[data-v-08d53d9e]  path {\n  color: #10b981;\n}\n.user-container .content[data-v-08d53d9e] {\n  flex: 1;\n  padding: 2.5rem 2rem;\n  background-color: #fff;\n  border-radius: 7px;\n  min-height: 300px;\n}\n@media (max-width: 600px) {\n.user-container .content[data-v-08d53d9e] {\n    padding: 2rem 1rem;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/UserDashBoard.vue?vue&type=style&index=0&id=08d53d9e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/UserDashBoard.vue?vue&type=style&index=0&id=08d53d9e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashBoard_vue_vue_type_style_index_0_id_08d53d9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDashBoard.vue?vue&type=style&index=0&id=08d53d9e&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/UserDashBoard.vue?vue&type=style&index=0&id=08d53d9e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashBoard_vue_vue_type_style_index_0_id_08d53d9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashBoard_vue_vue_type_style_index_0_id_08d53d9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Vue/views/UserDashBoard.vue":
/*!**************************************************!*\
  !*** ./resources/js/Vue/views/UserDashBoard.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserDashBoard_vue_vue_type_template_id_08d53d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDashBoard.vue?vue&type=template&id=08d53d9e&scoped=true& */ "./resources/js/Vue/views/UserDashBoard.vue?vue&type=template&id=08d53d9e&scoped=true&");
/* harmony import */ var _UserDashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDashBoard.vue?vue&type=script&lang=js& */ "./resources/js/Vue/views/UserDashBoard.vue?vue&type=script&lang=js&");
/* harmony import */ var _UserDashBoard_vue_vue_type_style_index_0_id_08d53d9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserDashBoard.vue?vue&type=style&index=0&id=08d53d9e&lang=scss&scoped=true& */ "./resources/js/Vue/views/UserDashBoard.vue?vue&type=style&index=0&id=08d53d9e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserDashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDashBoard_vue_vue_type_template_id_08d53d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserDashBoard_vue_vue_type_template_id_08d53d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "08d53d9e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Vue/views/UserDashBoard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Vue/views/UserDashBoard.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Vue/views/UserDashBoard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDashBoard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/UserDashBoard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Vue/views/UserDashBoard.vue?vue&type=style&index=0&id=08d53d9e&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Vue/views/UserDashBoard.vue?vue&type=style&index=0&id=08d53d9e&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashBoard_vue_vue_type_style_index_0_id_08d53d9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDashBoard.vue?vue&type=style&index=0&id=08d53d9e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/UserDashBoard.vue?vue&type=style&index=0&id=08d53d9e&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Vue/views/UserDashBoard.vue?vue&type=template&id=08d53d9e&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Vue/views/UserDashBoard.vue?vue&type=template&id=08d53d9e&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashBoard_vue_vue_type_template_id_08d53d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashBoard_vue_vue_type_template_id_08d53d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashBoard_vue_vue_type_template_id_08d53d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDashBoard.vue?vue&type=template&id=08d53d9e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/UserDashBoard.vue?vue&type=template&id=08d53d9e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/UserDashBoard.vue?vue&type=template&id=08d53d9e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/UserDashBoard.vue?vue&type=template&id=08d53d9e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "user-container" }, [
    _c(
      "div",
      { staticClass: "dash-board" },
      [
        _c(
          "router-link",
          { staticClass: "link-dark", attrs: { to: { name: "CommonInfo" } } },
          [
            _c(
              "div",
              { staticClass: "name" },
              [
                _c("svg-vue", {
                  staticClass: "dark-icon",
                  attrs: { icon: "dashboard" },
                }),
                _vm._v("Dashboard\n      "),
              ],
              1
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "link-dark", attrs: { to: { name: "MyOrders" } } },
          [
            _c(
              "div",
              { staticClass: "name" },
              [
                _c("svg-vue", {
                  staticClass: "dark-icon",
                  attrs: { icon: "list", viewBox: "0 0 550 550" },
                }),
                _vm._v("\n        My Orders\n      "),
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
            attrs: { to: { name: "UpdateProfile" } },
          },
          [
            _c(
              "div",
              { staticClass: "name" },
              [
                _c("svg-vue", {
                  staticClass: "dark-icon",
                  attrs: { icon: "setting" },
                }),
                _vm._v("\n        Update Profile\n      "),
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
            attrs: { to: { name: "ChangePassword" } },
          },
          [
            !_vm.userProvider
              ? _c(
                  "div",
                  { staticClass: "name" },
                  [
                    _c("svg-vue", {
                      staticClass: "dark-icon",
                      attrs: { icon: "change-password" },
                    }),
                    _vm._v("\n        Change Password\n      "),
                  ],
                  1
                )
              : _vm._e(),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "name", on: { click: _vm.logoutUser } },
          [
            _c("svg-vue", {
              staticClass: "dark-icon",
              attrs: { icon: "unlock" },
            }),
            _vm._v(" Logout\n    "),
          ],
          1
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "content" }, [_c("router-view")], 1),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);