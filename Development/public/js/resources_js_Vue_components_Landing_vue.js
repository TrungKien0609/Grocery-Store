"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Vue_components_Landing_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Landing.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Landing.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Landing",
  components: {
    Banner: function Banner() {
      return __webpack_require__.e(/*! import() */ "resources_js_Vue_components_slide_landing_banner_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./slide_landing/banner.vue */ "./resources/js/Vue/components/slide_landing/banner.vue"));
    }
  },
  data: function data() {
    return {
      banners: [{
        id: 0,
        image: "images/slide-images/slider-1.jpg",
        title: "The Best Quality Products Guaranteed!",
        description: "Dramatically facilitate effective total linkage for go forward processes...",
        key: "biscuits-cakes"
      }, {
        id: 1,
        image: "images/slide-images/slider-2.jpg",
        title: "Best Different Type of Grocery Store",
        description: "Quickly aggregate empowered networks after emerging products...",
        key: "fish-meat"
      }, {
        id: 2,
        image: "images/slide-images/slider-3.jpg",
        title: "Quality Freshness Guaranteed!",
        description: "Intrinsicly fashion performance based products rather than accurate benefits...",
        key: "fresh-vegetable"
      }],
      visibility: 0,
      direction: "next"
    };
  },
  computed: {
    bannerLength: function bannerLength() {
      return this.banners.length;
    }
  },
  methods: {
    next: function next() {
      if (this.visibility >= this.bannerLength - 1) {
        this.visibility = 0;
      } else this.visibility++;

      this.direction = "next";
    },
    prev: function prev() {
      if (this.visibility === 0) {
        this.visibility = this.bannerLength - 1;
      } else this.visibility--;

      this.direction = "prev";
    }
  },
  mounted: function mounted() {
    var _this = this;

    setInterval(function () {
      _this.next();
    }, 3000);
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Landing.vue?vue&type=style&index=0&id=361b7bc5&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Landing.vue?vue&type=style&index=0&id=361b7bc5&lang=scss&scoped=true& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".landing-container[data-v-361b7bc5] {\n  margin: 1.2rem 0;\n}\n.landing-container .header[data-v-361b7bc5] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n@media (max-width: 1024px) {\n.landing-container .header[data-v-361b7bc5] {\n    min-height: 300px;\n}\n}\n.landing-container .header .slide[data-v-361b7bc5] {\n  flex: 1;\n  position: relative;\n  margin-right: 1.5rem;\n  overflow-x: hidden;\n  min-height: 16rem;\n}\n@media (max-width: 1024px) {\n.landing-container .header .slide[data-v-361b7bc5] {\n    margin-right: 0;\n}\n}\n.landing-container .header .slide .dot[data-v-361b7bc5] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-bottom: 1rem;\n  transform: translate(-50%, 0);\n  color: #fff;\n  display: flex;\n  justify-content: flex-start;\n  cursor: pointer;\n}\n@media (max-width: 500px) {\n.landing-container .header .slide .dot[data-v-361b7bc5] {\n    top: 0.5rem;\n}\n}\n@media (max-width: 400px) {\n.landing-container .header .slide .dot[data-v-361b7bc5] {\n    margin-bottom: 0.5rem;\n}\n}\n.landing-container .header .slide .dot .dark-icon[data-v-361b7bc5] {\n  width: 20px;\n  height: auto;\n}\n@media (max-width: 400px) {\n.landing-container .header .slide .dot .dark-icon[data-v-361b7bc5] {\n    width: 16px;\n}\n}\n.landing-container .header .slide .dot .dark-icon[data-v-361b7bc5]:hover  path {\n  fill: #10b981;\n}\n.landing-container .header .slide .dot .dark-icon[data-v-361b7bc5]  path {\n  fill: #ccc;\n}\n.landing-container .header .slide .dot .next[data-v-361b7bc5],\n.landing-container .header .slide .dot .prev[data-v-361b7bc5] {\n  margin: 0 1rem;\n  padding: 0.5rem;\n}\n.landing-container .header .static-banner[data-v-361b7bc5] {\n  max-width: 500px;\n}\n@media (max-width: 1024px) {\n.landing-container .header .static-banner[data-v-361b7bc5] {\n    display: none;\n}\n}\n.landing-container .header .static-banner .image[data-v-361b7bc5] {\n  border-radius: 5px;\n  overflow: hidden;\n  height: 8rem;\n  min-width: 500px;\n}\n.landing-container .header .static-banner .image.first[data-v-361b7bc5] {\n  margin-bottom: 1rem;\n}\n.landing-container .footer[data-v-361b7bc5] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1.5rem;\n}\n@media (max-width: 1024px) {\n.landing-container .footer[data-v-361b7bc5] {\n    display: none;\n}\n}\n.landing-container .footer .service[data-v-361b7bc5] {\n  flex: 1 1 24%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  background-color: cyan;\n  margin-right: 0.5rem;\n  border-radius: 7px;\n}\n.landing-container .footer .service .dark-icon[data-v-361b7bc5] {\n  margin-right: 1rem;\n  width: 24px;\n  min-width: 24px;\n  max-width: 24px;\n  height: auto;\n  color: #10b981;\n}\n.landing-container .footer .service .dark-icon[data-v-361b7bc5]  path {\n  fill: none;\n}\n.landing-container .footer .service h3[data-v-361b7bc5] {\n  font-family: \"poppins\", sans-serif;\n  font-size: 1rem;\n}\n.landing-container .footer .service p[data-v-361b7bc5] {\n  font-family: \"poppins\", sans-serif;\n  font-size: 0.85rem;\n  color: #4b5563;\n}\n.landing-container .footer .first[data-v-361b7bc5] {\n  background-color: #fee2e2;\n}\n.landing-container .footer .second[data-v-361b7bc5] {\n  background-color: #e0e7ff;\n}\n.landing-container .footer .third[data-v-361b7bc5] {\n  background-color: #fef9c3;\n}\n.landing-container .footer .four[data-v-361b7bc5] {\n  background-color: #dcfce7;\n  margin-right: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Landing.vue?vue&type=style&index=0&id=361b7bc5&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Landing.vue?vue&type=style&index=0&id=361b7bc5&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_361b7bc5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=style&index=0&id=361b7bc5&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Landing.vue?vue&type=style&index=0&id=361b7bc5&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_361b7bc5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_361b7bc5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Vue/components/Landing.vue":
/*!*************************************************!*\
  !*** ./resources/js/Vue/components/Landing.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Landing_vue_vue_type_template_id_361b7bc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Landing.vue?vue&type=template&id=361b7bc5&scoped=true& */ "./resources/js/Vue/components/Landing.vue?vue&type=template&id=361b7bc5&scoped=true&");
/* harmony import */ var _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing.vue?vue&type=script&lang=js& */ "./resources/js/Vue/components/Landing.vue?vue&type=script&lang=js&");
/* harmony import */ var _Landing_vue_vue_type_style_index_0_id_361b7bc5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Landing.vue?vue&type=style&index=0&id=361b7bc5&lang=scss&scoped=true& */ "./resources/js/Vue/components/Landing.vue?vue&type=style&index=0&id=361b7bc5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Landing_vue_vue_type_template_id_361b7bc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Landing_vue_vue_type_template_id_361b7bc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "361b7bc5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Vue/components/Landing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Vue/components/Landing.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Vue/components/Landing.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Landing.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Vue/components/Landing.vue?vue&type=style&index=0&id=361b7bc5&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Vue/components/Landing.vue?vue&type=style&index=0&id=361b7bc5&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_361b7bc5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=style&index=0&id=361b7bc5&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Landing.vue?vue&type=style&index=0&id=361b7bc5&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Vue/components/Landing.vue?vue&type=template&id=361b7bc5&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Vue/components/Landing.vue?vue&type=template&id=361b7bc5&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_361b7bc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_361b7bc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_361b7bc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Landing.vue?vue&type=template&id=361b7bc5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Landing.vue?vue&type=template&id=361b7bc5&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Landing.vue?vue&type=template&id=361b7bc5&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Landing.vue?vue&type=template&id=361b7bc5&scoped=true& ***!
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
  return _c("div", { staticClass: "landing-container" }, [
    _c("div", { staticClass: "header" }, [
      _c(
        "div",
        { staticClass: "slide" },
        [
          _vm._l(_vm.banners, function (item, index) {
            return _c("Banner", {
              key: index,
              attrs: {
                index: index,
                image: item.image,
                title: item.title,
                description: item.description,
                keyword: item.key,
                visibility: _vm.visibility,
                direction: _vm.direction,
              },
            })
          }),
          _vm._v(" "),
          _c("div", { staticClass: "dot" }, [
            _c(
              "div",
              { staticClass: "prev", on: { click: _vm.prev } },
              [
                _c("svg-vue", {
                  staticClass: "dark-icon",
                  attrs: { icon: "left-chevron" },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "next", on: { click: _vm.next } },
              [
                _c("svg-vue", {
                  staticClass: "dark-icon",
                  attrs: { icon: "right-chevron" },
                }),
              ],
              1
            ),
          ]),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "static-banner" },
        [
          _c(
            "router-link",
            {
              attrs: {
                to: { name: "Search", query: { category: "fresh-vegetable" } },
              },
            },
            [
              _c("div", { staticClass: "image first" }, [
                _c("img", {
                  attrs: { src: "/images/banner/banner-1.jpg", alt: "banner1" },
                }),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              attrs: {
                to: { name: "Search", query: { category: "organic-food" } },
              },
            },
            [
              _c("div", { staticClass: "image" }, [
                _c("img", {
                  attrs: { src: "/images/banner/banner-2.jpg", alt: "banner1" },
                }),
              ]),
            ]
          ),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "footer" }, [
      _c(
        "div",
        { staticClass: "service first" },
        [
          _c("svg-vue", { staticClass: "dark-icon", attrs: { icon: "truck" } }),
          _vm._v(" "),
          _vm._m(0),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "service second" },
        [
          _c("svg-vue", {
            staticClass: "dark-icon",
            attrs: { icon: "phone-ringing" },
          }),
          _vm._v(" "),
          _vm._m(1),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "service third" },
        [
          _c("svg-vue", {
            staticClass: "dark-icon",
            attrs: { icon: "wallet" },
          }),
          _vm._v(" "),
          _vm._m(2),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "service four" },
        [
          _c("svg-vue", {
            staticClass: "dark-icon",
            attrs: { icon: "giftbox" },
          }),
          _vm._v(" "),
          _vm._m(3),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text" }, [
      _c("h3", [_vm._v("Free Shipping")]),
      _vm._v(" "),
      _c("p", [_vm._v("From $20.00")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text" }, [
      _c("h3", [_vm._v("Support 24/7")]),
      _vm._v(" "),
      _c("p", [_vm._v("At Anytime")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text" }, [
      _c("h3", [_vm._v("Secure Payment")]),
      _vm._v(" "),
      _c("p", [_vm._v("Totally Safe")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text" }, [
      _c("h3", [_vm._v("Latest Offer")]),
      _vm._v(" "),
      _c("p", [_vm._v("Upto 20% off")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);