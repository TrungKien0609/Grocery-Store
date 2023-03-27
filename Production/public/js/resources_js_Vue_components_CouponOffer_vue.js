"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Vue_components_CouponOffer_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/CouponOffer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/CouponOffer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CouponOffer",
  components: {
    TimeExpired: function TimeExpired() {
      return __webpack_require__.e(/*! import() */ "resources_js_Vue_components_TimeExpired_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/TimeExpired.vue */ "./resources/js/Vue/components/TimeExpired.vue"));
    }
  },
  props: ["item"],
  data: function data() {
    return {
      copy: false,
      active: true
    };
  },
  created: function created() {
    if (Date.parse(this.item.date) / 1000 < new Date().getTime() / 1000) {
      this.active = false;
    }
  },
  updated: function updated() {
    if (Date.parse(this.item.date) / 1000 < new Date().getTime() / 1000) {
      this.active = false;
    }
  },
  methods: {
    copyAction: function copyAction() {
      this.copy = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/CouponOffer.vue?vue&type=style&index=0&id=7b618904&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/CouponOffer.vue?vue&type=style&index=0&id=7b618904&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".coupon-offer-container[data-v-7b618904] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1.5rem;\n  background-color: #fff;\n  border-radius: 7px;\n  padding: 2rem 1.5rem;\n}\n@media (max-width: 760px) {\n.coupon-offer-container[data-v-7b618904] {\n    grid-template-columns: repeat(1, 1fr);\n    grid-column-gap: 0;\n}\n}\n.coupon-offer-container .image[data-v-7b618904] {\n  width: 120px;\n  height: 120px;\n  max-width: 120px;\n}\n@media (max-width: 600px) {\n.coupon-offer-container .image[data-v-7b618904] {\n    max-height: 80px;\n    min-width: 80px;\n}\n}\n.coupon-offer-container .left[data-v-7b618904] {\n  display: flex;\n  justify-content: flex-start;\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n.coupon-offer-container .left .info[data-v-7b618904] {\n  padding-left: 1rem;\n  width: 100%;\n}\n.coupon-offer-container .left .info .name[data-v-7b618904] {\n  font-size: 1.05rem;\n  color: #333;\n  font-family: sans-serif;\n  margin: 0.5rem 0;\n}\n.coupon-offer-container .left .info .number-off[data-v-7b618904] {\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #4b5563;\n}\n.coupon-offer-container .left .info .number-off span[data-v-7b618904] {\n  font-family: sans-serif;\n  color: #ef4444;\n}\n.coupon-offer-container .right .status[data-v-7b618904] {\n  color: #000;\n}\n.coupon-offer-container .right .status span[data-v-7b618904] {\n  color: #ef4444;\n}\n.coupon-offer-container .right .status .active[data-v-7b618904] {\n  color: #059669;\n}\n@media (max-width: 760px) {\n.coupon-offer-container .right .status[data-v-7b618904] {\n    margin-top: 1rem;\n}\n}\n.coupon-offer-container .right .copy-area[data-v-7b618904] {\n  cursor: pointer;\n  position: relative;\n  width: 100%;\n  height: 50px;\n  text-transform: uppercase;\n  color: #059669;\n  font-family: sans-serif;\n  font-weight: 800;\n  border: 1px dashed #10b981;\n  border-radius: 7px;\n  margin: 0.5rem 0;\n  background-color: #ecfdf5;\n  text-align: center;\n}\n.coupon-offer-container .right .copy-area p[data-v-7b618904] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  line-height: 50px;\n}\n.coupon-offer-container .right .note[data-v-7b618904] {\n  font-size: 0.78rem;\n  color: #6b7280;\n}\n@media (max-width: 760px) {\n.coupon-offer-container .right .note[data-v-7b618904] {\n    width: 100%;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/CouponOffer.vue?vue&type=style&index=0&id=7b618904&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/CouponOffer.vue?vue&type=style&index=0&id=7b618904&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponOffer_vue_vue_type_style_index_0_id_7b618904_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CouponOffer.vue?vue&type=style&index=0&id=7b618904&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/CouponOffer.vue?vue&type=style&index=0&id=7b618904&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponOffer_vue_vue_type_style_index_0_id_7b618904_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponOffer_vue_vue_type_style_index_0_id_7b618904_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Vue/components/CouponOffer.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Vue/components/CouponOffer.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CouponOffer_vue_vue_type_template_id_7b618904_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CouponOffer.vue?vue&type=template&id=7b618904&scoped=true& */ "./resources/js/Vue/components/CouponOffer.vue?vue&type=template&id=7b618904&scoped=true&");
/* harmony import */ var _CouponOffer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CouponOffer.vue?vue&type=script&lang=js& */ "./resources/js/Vue/components/CouponOffer.vue?vue&type=script&lang=js&");
/* harmony import */ var _CouponOffer_vue_vue_type_style_index_0_id_7b618904_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CouponOffer.vue?vue&type=style&index=0&id=7b618904&lang=scss&scoped=true& */ "./resources/js/Vue/components/CouponOffer.vue?vue&type=style&index=0&id=7b618904&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CouponOffer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CouponOffer_vue_vue_type_template_id_7b618904_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CouponOffer_vue_vue_type_template_id_7b618904_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7b618904",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Vue/components/CouponOffer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Vue/components/CouponOffer.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Vue/components/CouponOffer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponOffer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CouponOffer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/CouponOffer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponOffer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Vue/components/CouponOffer.vue?vue&type=style&index=0&id=7b618904&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Vue/components/CouponOffer.vue?vue&type=style&index=0&id=7b618904&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponOffer_vue_vue_type_style_index_0_id_7b618904_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CouponOffer.vue?vue&type=style&index=0&id=7b618904&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/CouponOffer.vue?vue&type=style&index=0&id=7b618904&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Vue/components/CouponOffer.vue?vue&type=template&id=7b618904&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Vue/components/CouponOffer.vue?vue&type=template&id=7b618904&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponOffer_vue_vue_type_template_id_7b618904_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponOffer_vue_vue_type_template_id_7b618904_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponOffer_vue_vue_type_template_id_7b618904_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CouponOffer.vue?vue&type=template&id=7b618904&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/CouponOffer.vue?vue&type=template&id=7b618904&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/CouponOffer.vue?vue&type=template&id=7b618904&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/CouponOffer.vue?vue&type=template&id=7b618904&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "coupon-offer-container" }, [
    _c("div", { staticClass: "left" }, [
      _c("div", { staticClass: "image" }, [
        _c("img", { attrs: { src: _vm.item.image, alt: "Offer" } }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "info" }, [
        _c(
          "div",
          { staticClass: "time-for-expired" },
          [
            _c("TimeExpired", {
              attrs: { date: _vm.item.date, active: _vm.active },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c("p", { staticClass: "name" }, [_vm._v(_vm._s(_vm.item.name))]),
        _vm._v(" "),
        _c("p", { staticClass: "number-off" }, [
          _c("span", [_vm._v(_vm._s(_vm.item.discount) + "%")]),
          _vm._v(" Off\n      "),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "right" }, [
      _c("p", { staticClass: "status" }, [
        _vm._v("\n      Coupon "),
        _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.active,
                expression: "!active",
              },
            ],
          },
          [_vm._v("Inactive")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.active,
                expression: "active",
              },
            ],
            staticClass: "active",
          },
          [_vm._v("Active")]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "copy-area" }, [
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.copy,
                expression: "!copy",
              },
              {
                name: "clipboard",
                rawName: "v-clipboard:copy",
                value: _vm.item.code,
                expression: "item.code",
                arg: "copy",
              },
            ],
            on: { click: _vm.copyAction },
          },
          [_vm._v("\n        " + _vm._s(_vm.item.code) + "\n      ")]
        ),
        _vm._v(" "),
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.copy,
                expression: "copy",
              },
            ],
          },
          [_vm._v("Copied")]
        ),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "note" }, [
        _vm._v(
          "\n      * This coupon code apply when you shopping more then $" +
            _vm._s(_vm.item.rule) +
            "\n    "
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);