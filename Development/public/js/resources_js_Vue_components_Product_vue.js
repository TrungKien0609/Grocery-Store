"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Vue_components_Product_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Product.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Product.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "product",
  props: ["product"],
  components: {
    StarRating: function StarRating() {
      return __webpack_require__.e(/*! import() */ "node_modules_vue-star-rating_dist_VueStarRating_common_js").then(__webpack_require__.t.bind(__webpack_require__, /*! vue-star-rating */ "./node_modules/vue-star-rating/dist/VueStarRating.common.js", 23));
    }
  },
  data: function data() {
    return {
      startBuy: null,
      FullProduct: null,
      hasAdd: 0,
      willAdd: 1
    };
  },
  created: function created() {
    this.hasAdd = this.result;
    this.startBuy = this.result === 0 ? false : true;
  },
  updated: function updated() {
    this.hasAdd = this.result;
    this.startBuy = this.result === 0 ? false : true;
  },
  methods: _objectSpread(_objectSpread({
    toggleBlurBody: function toggleBlurBody() {
      document.getElementsByTagName("html")[0].classList.toggle("overflow");
    },
    toggleShowFullProduct: function toggleShowFullProduct() {
      this.FullProduct = !this.FullProduct;
      this.toggleBlurBody();
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["setItems", "setQuantityItem", "setTotalItems", "deleteCartItem"])), {}, {
    start: function start() {
      this.add();
      this.startBuy = true;
    },
    add: function add() {
      if (this.hasAdd < this.product.quantity) {
        this.hasAdd++;
        this.action(true);
      } else {
        this.$toaster.error("No more quantity available for this product");
      }
    },
    subtract: function subtract() {
      this.hasAdd--;
      this.startBuy = this.hasAdd === 0 ? false : true;

      if (this.hasAdd === 0) {
        this.deleteCartItem(this.product.id);
      } else {
        this.action(false);
      }
    },
    checkExist: function checkExist(product_id) {
      return this.items.findIndex(function (item) {
        return item.id === product_id;
      });
    },
    action: function action(math) {
      if (this.checkExist(this.product.id) !== -1) {
        var index = this.checkExist(this.product.id);
        this.setQuantityItem({
          index: index,
          hasAdd: this.hasAdd,
          math: math,
          // add or subtract
          price: this.product.price,
          product_id: this.product.id
        });
      } else {
        this.setItems({
          items: [].concat(_toConsumableArray(this.items), [_objectSpread(_objectSpread({}, this.product), {}, {
            hasAdd: this.hasAdd,
            itemTotal: this.product.price
          })]),
          price: this.product.price,
          product_id: this.product.id
        });
      }
    },
    addMutipleProduct: function addMutipleProduct() {
      for (var i = 0; i < this.willAdd; i++) {
        if (this.hasAdd < this.product.quantity) {
          this.hasAdd++;
          this.action(true);

          if (i === this.willAdd - 1) {
            this.$toaster.success(this.willAdd + " " + this.product.name + " has added to cart");
          }
        } else {
          this.$toaster.error("No more quantity available for this product");
          break;
        }
      }
    },
    checkWillAdd: function checkWillAdd() {
      if (this.willAdd > 1) this.willAdd--;
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["items", "totalItems", "totalUniqueItems", "cartTotal", "isEmpty"])), {}, {
    result: function result() {
      var _this = this;

      var index = this.items.findIndex(function (item) {
        return item.id === _this.product.id;
      });

      if (index !== -1) {
        return this.$store.state.items[index].hasAdd;
      } else return 0;
    },
    averageStar: function averageStar() {
      return (Math.round(this.product.reviews.reduce(function (old, current) {
        return old + current.star;
      }, 0) / this.product.reviews.length * 10) / 10).toFixed(1);
    }
  })
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Product.vue?vue&type=style&index=0&id=80e03ac6&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Product.vue?vue&type=style&index=0&id=80e03ac6&lang=scss&scoped=true& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".product-container .first-look[data-v-80e03ac6] {\n  width: 100%;\n  position: relative;\n  text-align: left;\n  background-color: #fff;\n  border-radius: 7px;\n  border: 1px solid #eee;\n  overflow: hidden;\n}\n.product-container .first-look .image[data-v-80e03ac6] {\n  width: 100%;\n  min-height: 5rem;\n  cursor: pointer;\n}\n.product-container .first-look .image img[data-v-80e03ac6] {\n  width: 70%;\n  margin: 0 auto;\n  transition: 0.25s;\n}\n@media (max-width: 1024px) {\n.product-container .first-look .image img[data-v-80e03ac6] {\n    width: 80%;\n}\n}\n@media (max-width: 600px) {\n.product-container .first-look .image img[data-v-80e03ac6] {\n    width: 100%;\n}\n}\n.product-container .first-look .image:hover img[data-v-80e03ac6] {\n  transform: scale(1.05);\n}\n.product-container .first-look .unit[data-v-80e03ac6] {\n  margin: 0 1rem;\n  font-size: 0.8rem;\n  color: #9ca3af;\n  line-height: 1.5rem;\n}\n.product-container .first-look .name[data-v-80e03ac6] {\n  margin: 0 1rem;\n  color: #4b5563;\n  font-size: 0.85rem;\n  line-height: 1.5rem;\n}\n.product-container .first-look .rating[data-v-80e03ac6] {\n  margin: 0 1rem;\n}\n.product-container .first-look .price[data-v-80e03ac6] {\n  margin: 1rem;\n  font-weight: 600;\n  font-size: 1.1rem;\n  font-family: sans-serif;\n  color: #000;\n}\n.product-container .first-look .price .product-discount[data-v-80e03ac6] {\n  font-size: 0.85rem;\n  color: #9ca3af;\n  text-decoration: line-through;\n}\n.product-container .first-look .action[data-v-80e03ac6],\n.product-container .first-look .add-product[data-v-80e03ac6] {\n  position: absolute;\n  bottom: 1rem;\n  right: 1rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: #10b981;\n  color: #fff;\n  padding: 0.5rem;\n  border-radius: 5px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.product-container .first-look .action .dark-icon[data-v-80e03ac6],\n.product-container .first-look .add-product .dark-icon[data-v-80e03ac6] {\n  transform: scale(0.5);\n  cursor: pointer;\n}\n.product-container .first-look .action .dark-icon[data-v-80e03ac6]  path,\n.product-container .first-look .add-product .dark-icon[data-v-80e03ac6]  path {\n  fill: #ccc;\n}\n.product-container .first-look .add-product[data-v-80e03ac6] {\n  background-color: #fff;\n  border: 1px solid #eee;\n  padding: 0;\n  transition: 0.25s;\n  cursor: pointer;\n}\n.product-container .first-look .add-product[data-v-80e03ac6]:hover {\n  background-color: #10b981;\n}\n.product-container .first-look .add-product:hover .dark-icon[data-v-80e03ac6]  path {\n  fill: #fff;\n}\n.product-container .first-look .add-product .dark-icon[data-v-80e03ac6] {\n  width: 37px;\n  height: auto;\n}\n.product-container .first-look .add-product .dark-icon[data-v-80e03ac6]  path {\n  fill: #10b981;\n}\n.product-container .first-look .discount-info[data-v-80e03ac6] {\n  position: absolute;\n  right: 1rem;\n  top: 1rem;\n  font-size: 0.75rem;\n  color: #fff;\n  background-color: #f97316;\n  padding: 0.2rem 0.5rem;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.product-container .first-look .stock-info[data-v-80e03ac6] {\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n  font-size: 0.75rem;\n  color: rgba(220, 38, 38, 0.8);\n  background-color: #fee2e2;\n  padding: 0.2rem 0.5rem;\n  border-radius: 9999px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.product-container .go-detail[data-v-80e03ac6] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 100;\n}\n.product-container .go-detail .content-container[data-v-80e03ac6] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.product-container .go-detail .content-container .content[data-v-80e03ac6] {\n  z-index: 101;\n  width: 100%;\n  max-width: 900px;\n  min-height: 450px;\n  max-height: 95vh;\n  background-color: #fff;\n  border-radius: 20px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 2rem;\n  padding: 1.5rem;\n  margin: 0 1rem;\n  overflow: auto;\n}\n.product-container .go-detail .content-container .content[data-v-80e03ac6]::-webkit-scrollbar {\n  display: none;\n}\n@media (max-width: 768px) {\n.product-container .go-detail .content-container .content[data-v-80e03ac6] {\n    grid-template-columns: repeat(1, 1fr);\n}\n}\n.product-container .go-detail .content-container .content .image[data-v-80e03ac6] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.product-container .go-detail .content-container .content .image img[data-v-80e03ac6] {\n  width: 90%;\n  height: auto;\n  display: block;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 auto;\n}\n.product-container .go-detail .content-container .content .product-info[data-v-80e03ac6] {\n  overflow-y: auto;\n}\n.product-container .go-detail .content-container .content .product-info .title[data-v-80e03ac6] {\n  color: #000;\n  font-family: sans-serif;\n  font-size: 1.5rem;\n}\n.product-container .go-detail .content-container .content .product-info .stock-info[data-v-80e03ac6] {\n  display: inline-block;\n  font-size: 0.75rem;\n  color: #059669;\n  background-color: #d1fae5;\n  padding: 0.2rem 0.5rem;\n  border-radius: 9999px;\n  font-weight: 600;\n  margin: 0.5rem 0;\n}\n.product-container .go-detail .content-container .content .product-info .stock-info.stock-out[data-v-80e03ac6] {\n  color: rgba(220, 38, 38, 0.8);\n  background-color: #fee2e2;\n}\n.product-container .go-detail .content-container .content .product-info .description[data-v-80e03ac6] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.75rem;\n  margin-bottom: 1rem;\n  max-height: 250px;\n  overflow: auto;\n}\n.product-container .go-detail .content-container .content .product-info .description[data-v-80e03ac6]::-webkit-scrollbar {\n  width: 5px;\n  background-color: #f5f5f5;\n}\n.product-container .go-detail .content-container .content .product-info .description[data-v-80e03ac6]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #f5f5f5;\n}\n.product-container .go-detail .content-container .content .product-info .description[data-v-80e03ac6]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #10b981;\n}\n.product-container .go-detail .content-container .content .product-info .price[data-v-80e03ac6] {\n  display: inline-block;\n  font-family: sans-serif;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 600;\n}\n.product-container .go-detail .content-container .content .product-info .price .dicount-price[data-v-80e03ac6] {\n  color: #9ca3af;\n  font-weight: 400;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  margin-left: 0.25rem;\n  text-decoration: line-through;\n}\n.product-container .go-detail .content-container .content .product-info .action[data-v-80e03ac6] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 1rem 0;\n  grid-gap: 1rem;\n}\n.product-container .go-detail .content-container .content .product-info .action .math[data-v-80e03ac6] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.7em 1.2rem;\n  border-radius: 7px;\n  border: 1px solid #ccc;\n  font-weight: 600;\n  font-family: sans-serif;\n}\n.product-container .go-detail .content-container .content .product-info .action .math .dark-icon[data-v-80e03ac6] {\n  width: 18px;\n  padding: 3px;\n  cursor: pointer;\n  transition: 0.25s;\n}\n.product-container .go-detail .content-container .content .product-info .action .math .dark-icon[data-v-80e03ac6]  path {\n  fill: #555;\n}\n.product-container .go-detail .content-container .content .product-info .action .math .dark-icon[data-v-80e03ac6]:hover  path {\n  fill: #ccc;\n}\n.product-container .go-detail .content-container .content .product-info .action button[data-v-80e03ac6] {\n  cursor: pointer;\n  background-color: #10b981;\n  color: #fff;\n  font-weight: 600;\n  font-family: sans-serif;\n  border-radius: 7px;\n  transition: 0.25s;\n}\n.product-container .go-detail .content-container .content .product-info .action button[data-v-80e03ac6]:hover {\n  background-color: #059669;\n}\n.product-container .go-detail .content-container .content .product-info .category[data-v-80e03ac6] {\n  color: #374151;\n  font-weight: 600;\n  font-family: sans-serif;\n  font-size: 0.85rem;\n  line-height: 1.75rem;\n}\n.product-container .go-detail .content-container .content .product-info .category span[data-v-80e03ac6] {\n  color: #6b7280;\n  font-size: 0.85rem;\n}\n.product-container .go-detail .content-container .content .product-info .list-key[data-v-80e03ac6] {\n  width: 100%;\n  margin: 0.5rem 0;\n}\n.product-container .go-detail .content-container .content .product-info .list-key small[data-v-80e03ac6] {\n  display: inline-block;\n  padding: 3px 0.5rem;\n  background-color: #e5e7eb;\n  color: #6b7280;\n  font-weight: 600;\n  font-size: 0.75rem;\n  margin-right: 5px;\n  border-radius: 9999px;\n}\n.product-container .go-detail .content-container .close[data-v-80e03ac6] {\n  position: absolute;\n  right: 1.5rem;\n  top: 1.5rem;\n  width: 35px;\n  height: 35px;\n  z-index: 999;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.25s;\n}\n.product-container .go-detail .content-container .close[data-v-80e03ac6]:hover {\n  background-color: #fecaca;\n}\n.product-container .go-detail .content-container .close .dark-icon[data-v-80e03ac6] {\n  width: 10px;\n  height: 10px;\n  display: block;\n}\n.product-container .go-detail .content-container .close .dark-icon[data-v-80e03ac6]  path {\n  fill: #ef4444;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Product.vue?vue&type=style&index=0&id=80e03ac6&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Product.vue?vue&type=style&index=0&id=80e03ac6&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_80e03ac6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=style&index=0&id=80e03ac6&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Product.vue?vue&type=style&index=0&id=80e03ac6&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_80e03ac6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_80e03ac6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Vue/components/Product.vue":
/*!*************************************************!*\
  !*** ./resources/js/Vue/components/Product.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue_vue_type_template_id_80e03ac6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=80e03ac6&scoped=true& */ "./resources/js/Vue/components/Product.vue?vue&type=template&id=80e03ac6&scoped=true&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/Vue/components/Product.vue?vue&type=script&lang=js&");
/* harmony import */ var _Product_vue_vue_type_style_index_0_id_80e03ac6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=80e03ac6&lang=scss&scoped=true& */ "./resources/js/Vue/components/Product.vue?vue&type=style&index=0&id=80e03ac6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_80e03ac6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Product_vue_vue_type_template_id_80e03ac6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "80e03ac6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Vue/components/Product.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Vue/components/Product.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Vue/components/Product.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Product.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Vue/components/Product.vue?vue&type=style&index=0&id=80e03ac6&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Vue/components/Product.vue?vue&type=style&index=0&id=80e03ac6&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_80e03ac6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=style&index=0&id=80e03ac6&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Product.vue?vue&type=style&index=0&id=80e03ac6&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Vue/components/Product.vue?vue&type=template&id=80e03ac6&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Vue/components/Product.vue?vue&type=template&id=80e03ac6&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_80e03ac6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_80e03ac6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_80e03ac6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=template&id=80e03ac6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Product.vue?vue&type=template&id=80e03ac6&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Product.vue?vue&type=template&id=80e03ac6&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/components/Product.vue?vue&type=template&id=80e03ac6&scoped=true& ***!
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
  return _c("div", { staticClass: "product-container" }, [
    _c("div", { staticClass: "first-look" }, [
      _c(
        "div",
        { staticClass: "image", on: { click: _vm.toggleShowFullProduct } },
        [_c("img", { attrs: { src: _vm.product.image, alt: "product" } })]
      ),
      _vm._v(" "),
      _c("p", { staticClass: "unit" }, [_vm._v(_vm._s(_vm.product.unit))]),
      _vm._v(" "),
      _c("p", { staticClass: "name" }, [_vm._v(_vm._s(_vm.product.name))]),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "rating" },
        [
          _c("star-rating", {
            attrs: {
              rating: Number(_vm.averageStar),
              "read-only": true,
              increment: 0.01,
              "star-size": 15,
              "show-rating": false,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("p", { staticClass: "price" }, [
        _vm._v("\n      $" + _vm._s(_vm.product.price) + "\n      "),
        _vm.product.discount
          ? _c("span", { staticClass: "product-discount" }, [
              _vm._v("\n        $" + _vm._s(_vm.product.original_price)),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _vm.startBuy && _vm.hasAdd > 0
        ? _c("div", { staticClass: "action" }, [
            _c(
              "div",
              { on: { click: _vm.subtract } },
              [
                _c("svg-vue", {
                  staticClass: "dark-icon",
                  attrs: { icon: "minus" },
                }),
              ],
              1
            ),
            _vm._v("\n      " + _vm._s(_vm.result) + "\n      "),
            _c(
              "div",
              { on: { click: _vm.add } },
              [
                _c("svg-vue", {
                  staticClass: "dark-icon",
                  attrs: { icon: "plus" },
                }),
              ],
              1
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.startBuy
        ? _c(
            "div",
            { staticClass: "add-product", on: { click: _vm.start } },
            [
              _c("svg-vue", {
                staticClass: "dark-icon",
                attrs: { icon: "hand-bag" },
              }),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.product.discount,
              expression: "product.discount",
            },
          ],
          staticClass: "discount-info",
        },
        [_vm._v("\n      " + _vm._s(_vm.product.discount) + "% Off\n    ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.product.stock_info === "out stock",
              expression: "product.stock_info === 'out stock'",
            },
          ],
          staticClass: "stock-info",
        },
        [_vm._v("\n      " + _vm._s(_vm.product.stock_info) + "\n    ")]
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
            value: _vm.FullProduct,
            expression: "FullProduct",
          },
        ],
        staticClass: "go-detail",
      },
      [
        _c("div", {
          staticClass: "drawer",
          on: { click: _vm.toggleShowFullProduct },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "content-container" }, [
          _c("div", { staticClass: "content" }, [
            _c(
              "div",
              {
                staticClass: "image",
                on: { click: _vm.toggleShowFullProduct },
              },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "Product",
                        params: { slug: _vm.product.slug },
                      },
                    },
                  },
                  [
                    _c("img", {
                      attrs: { src: _vm.product.image, alt: "image" },
                    }),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "product-info" }, [
              _c(
                "div",
                { on: { click: _vm.toggleShowFullProduct } },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "dark-link",
                      attrs: {
                        to: {
                          name: "Product",
                          params: { slug: _vm.product.slug },
                        },
                      },
                    },
                    [
                      _c("h3", { staticClass: "title" }, [
                        _vm._v(_vm._s(_vm.product.name)),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  class: [
                    _vm.product.stock_info === "out stock" ? "stock-out" : "",
                    "stock-info",
                  ],
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.product.stock_info) +
                      "\n          "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "rating" },
                [
                  _c("star-rating", {
                    attrs: {
                      rating: Number(_vm.averageStar),
                      "read-only": true,
                      increment: 0.01,
                      "star-size": 20,
                      "show-rating": false,
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("p", { staticClass: "description" }, [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.product.description) +
                    "\n          "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price" }, [
                _vm._v(
                  "\n            $" +
                    _vm._s(_vm.product.price) +
                    "\n            "
                ),
                _vm.product.discount
                  ? _c("span", { staticClass: "dicount-price" }, [
                      _vm._v("$" + _vm._s(_vm.product.original_price)),
                    ])
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "action" }, [
                _c("div", { staticClass: "math" }, [
                  _c(
                    "div",
                    { on: { click: _vm.checkWillAdd } },
                    [
                      _c("svg-vue", {
                        staticClass: "dark-icon",
                        attrs: { icon: "minus" },
                      }),
                    ],
                    1
                  ),
                  _vm._v(
                    "\n              " +
                      _vm._s(_vm.willAdd) +
                      "\n              "
                  ),
                  _c(
                    "div",
                    {
                      on: {
                        click: function ($event) {
                          _vm.willAdd++
                        },
                      },
                    },
                    [
                      _c("svg-vue", {
                        staticClass: "dark-icon",
                        attrs: { icon: "plus" },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("button", { on: { click: _vm.addMutipleProduct } }, [
                  _vm._v("Add To Cart"),
                ]),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "category" }, [
                _vm._v("\n            Category: "),
                _c("span", [_vm._v(" " + _vm._s(_vm.product.category))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "list-key" }, [
                _c("small", [_vm._v(_vm._s(_vm.product.subCategory))]),
                _vm._v(" "),
                _c("small", [_vm._v(_vm._s(_vm.product.name))]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "close", on: { click: _vm.toggleShowFullProduct } },
            [
              _c("svg-vue", {
                staticClass: "dark-icon",
                attrs: { icon: "times", viewBox: " 7 7  10 10" },
              }),
            ],
            1
          ),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);