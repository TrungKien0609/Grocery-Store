"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Vue_views_Product_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/Product.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/Product.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/index.js */ "./resources/js/Vue/config/index.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProductView",
  components: {
    StarRating: function StarRating() {
      return __webpack_require__.e(/*! import() */ "node_modules_vue-star-rating_dist_VueStarRating_common_js").then(__webpack_require__.t.bind(__webpack_require__, /*! vue-star-rating */ "./node_modules/vue-star-rating/dist/VueStarRating.common.js", 23));
    },
    Review: function Review() {
      return __webpack_require__.e(/*! import() */ "resources_js_Vue_components_review_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/review.vue */ "./resources/js/Vue/components/review.vue"));
    },
    Pagination: function Pagination() {
      return __webpack_require__.e(/*! import() */ "resources_js_Vue_components_Pagination_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Pagination.vue */ "./resources/js/Vue/components/Pagination.vue"));
    },
    Loading: function Loading() {
      return __webpack_require__.e(/*! import() */ "resources_js_Vue_components_LoadingEffect_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/LoadingEffect.vue */ "./resources/js/Vue/components/LoadingEffect.vue"));
    }
  },
  data: function data() {
    return {
      userOptions: [],
      fiveStars: null,
      fourStars: null,
      threeStars: null,
      twoStars: null,
      oneStars: null,
      hasReviews: false,
      hasAdd: 0,
      reviews: {},
      totalStars: [],
      isShowLoading: null,
      moreThanOnePage: false
    };
  },
  created: function created() {
    var _this = this;

    this.showSpecificProduct(this.$route.params);
    this.hasAdd = this.result;
    this.startBuy = this.result === 0 ? false : true;
    this.loadReviews(1).then(function (res) {
      _this.moreThanOnePage = _this.reviews.last_page > 1 ? true : false;
    });
  },
  updated: function updated() {
    this.hasAdd = this.result;
    this.startBuy = this.result === 0 ? false : true;
  },
  methods: _objectSpread(_objectSpread(_objectSpread({
    toggleFiveStars: function toggleFiveStars() {
      this.fiveStars = !this.fiveStars;
    },
    toggleFourStars: function toggleFourStars() {
      this.fourStars = !this.fourStars;
    },
    toggleThreeStars: function toggleThreeStars() {
      this.threeStars = !this.threeStars;
    },
    toggleTwoStars: function toggleTwoStars() {
      this.twoStars = !this.twoStars;
    },
    toggleOneStars: function toggleOneStars() {
      this.oneStars = !this.oneStars;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapMutations)(["setItems", "setQuantityItem"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["showSpecificProduct"])), {}, {
    add: function add() {
      if (this.hasAdd < this.specificProduct.quantity) {
        this.hasAdd++;
        this.action(true);
        this.$toaster.success("1" + this.specificProduct.name + "added to cart!");
      } else {
        this.$toaster.error("No more quantity available for this product");
      }
    },
    checkExist: function checkExist(product_id) {
      return this.items.findIndex(function (item) {
        return item.id === product_id;
      });
    },
    action: function action(math) {
      if (this.checkExist(this.specificProduct.id) !== -1) {
        var index = this.checkExist(this.specificProduct.id);
        this.setQuantityItem({
          index: index,
          hasAdd: this.hasAdd,
          math: math,
          // add or subtract
          price: this.specificProduct.price,
          product_id: this.specificProduct.id
        });
      } else {
        this.setItems({
          items: [].concat(_toConsumableArray(this.items), [_objectSpread(_objectSpread({}, this.specificProduct), {}, {
            hasAdd: this.hasAdd,
            itemTotal: this.specificProduct.price
          })]),
          price: this.specificProduct.price,
          product_id: this.specificProduct.id
        });
      }
    },
    loadReviews: function loadReviews(page) {
      var _this2 = this;

      return axios.post(_config_index_js__WEBPACK_IMPORTED_MODULE_0__.REVIEW.link + this.$route.params.slug + "?page=" + page + "&per_page=" + _config_index_js__WEBPACK_IMPORTED_MODULE_0__.REVIEW.perPage, {
        option: this.userOptions
      }).then(function (res) {
        _this2.reviews = res.data.reviews;
        _this2.filterReview = res.data.reviews;
        _this2.hasReviews = res.data.stars.length > 0 ? true : false;
        _this2.totalStars = res.data.stars;
      });
    },
    paginate: function paginate(pageNum) {
      var _this3 = this;

      this.isShowLoading = true;
      this.loadReviews(pageNum).then(function (res) {
        _this3.isShowLoading = false;
        _this3.moreThanOnePage = _this3.reviews.last_page > 1 ? true : false;
      });
    }
  }),
  mounted: function mounted() {},
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["specificProduct", "items"])), {}, {
    result: function result() {
      var _this4 = this;

      var index = this.items.findIndex(function (item) {
        return item.id === _this4.specificProduct.id;
      });

      if (index !== -1) {
        return this.$store.state.items[index].hasAdd;
      } else return 0;
    },
    averageStar: function averageStar() {
      return (Math.round(this.totalStars.reduce(function (old, current) {
        return old + current.star;
      }, 0) / this.totalStars.length * 10) / 10).toFixed(1);
    },
    oneStarAmount: function oneStarAmount() {
      return this.totalStars.filter(function (el) {
        return el.star === 1;
      }).length;
    },
    twoStarAmount: function twoStarAmount() {
      return this.totalStars.filter(function (el) {
        return el.star === 2;
      }).length;
    },
    threeStarAmount: function threeStarAmount() {
      return this.totalStars.filter(function (el) {
        return el.star === 3;
      }).length;
    },
    fourStarAmount: function fourStarAmount() {
      return this.totalStars.filter(function (el) {
        return el.star === 4;
      }).length;
    },
    fiveStarAmount: function fiveStarAmount() {
      return this.totalStars.filter(function (el) {
        return el.star === 5;
      }).length;
    },
    fiveStarPercent: function fiveStarPercent() {
      return this.totalStars.length === 0 ? 0 : this.fiveStarAmount / this.totalStars.length * 100;
    },
    fourStarPercent: function fourStarPercent() {
      return this.totalStars.length === 0 ? 0 : this.fourStarAmount / this.totalStars.length * 100;
    },
    threeStarPercent: function threeStarPercent() {
      return this.totalStars.length === 0 ? 0 : this.threeStarAmount / this.totalStars.length * 100;
    },
    twoStarPercent: function twoStarPercent() {
      return this.totalStars.length === 0 ? 0 : this.twoStarAmount / this.totalStars.length * 100;
    },
    oneStarPercent: function oneStarPercent() {
      return this.totalStars.length === 0 ? 0 : this.oneStarAmount / this.totalStars.length * 100;
    }
  }),
  watch: {
    userOptions: function userOptions() {
      this.loadReviews(1);
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/Product.vue?vue&type=style&index=0&id=207f4792&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/Product.vue?vue&type=style&index=0&id=207f4792&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".product-container[data-v-207f4792] {\n  padding: 2.5rem;\n  background-color: #f9fafb;\n}\n@media (max-width: 1024px) {\n.product-container[data-v-207f4792] {\n    flex-direction: column;\n}\n}\n@media (max-width: 600px) {\n.product-container[data-v-207f4792] {\n    padding: 2.5rem 1rem;\n}\n}\n.product-container .link[data-v-207f4792] {\n  font-family: sans-serif;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 0.85rem;\n  width: 100%;\n  line-height: 1.5rem;\n}\n@media (max-width: 600px) {\n.product-container .link[data-v-207f4792] {\n    flex-wrap: wrap;\n}\n}\n.product-container .link span[data-v-207f4792] {\n  font-family: sans-serif;\n  font-weight: 600;\n}\n.product-container .link .dark-icon[data-v-207f4792] {\n  margin: 0 0.5rem;\n  width: 9px;\n  height: auto;\n}\n.product-container .link .dark-icon[data-v-207f4792]  path {\n  fill: rgba(0, 0, 0, 0.7);\n}\n.product-container .product-info[data-v-207f4792] {\n  display: grid;\n  grid-template-columns: 35% 35% 27%;\n  grid-gap: 1rem;\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 2rem;\n  margin: 1rem 0;\n}\n@media (max-width: 1200px) {\n.product-container .product-info[data-v-207f4792] {\n    grid-template-columns: repeat(2, 1fr);\n}\n}\n@media (max-width: 760px) {\n.product-container .product-info[data-v-207f4792] {\n    grid-template-columns: repeat(1, 1fr);\n    padding: 0.5rem;\n}\n}\n.product-container .product-info .image[data-v-207f4792] {\n  width: 100%;\n  display: block;\n  position: relative;\n  margin: 0 auto;\n  max-width: 500px;\n}\n@media (max-width: 760px) {\n.product-container .product-info .image[data-v-207f4792] {\n    max-width: initial;\n    max-height: 500px;\n}\n}\n.product-container .product-info .image img[data-v-207f4792] {\n  width: 70%;\n  margin: 0 auto;\n  height: auto;\n}\n@media (max-width: 1200px) {\n.product-container .product-info .image img[data-v-207f4792] {\n    transform: scale(1);\n}\n}\n.product-container .product-info .image .discount-info[data-v-207f4792] {\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n  font-size: 0.75rem;\n  color: #fff;\n  background-color: #f97316;\n  padding: 0.2rem 0.5rem;\n  border-radius: 5px;\n  cursor: pointer;\n}\n@media (max-width: 1200px) {\n.product-container .product-info .image[data-v-207f4792] {\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n}\n@media (max-width: 760px) {\n.product-container .product-info .image[data-v-207f4792] {\n    grid-column-start: initial;\n    grid-column-end: initial;\n}\n}\n.product-container .product-info .text-info .title[data-v-207f4792] {\n  font-family: sans-serif;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n.product-container .product-info .text-info .ratting[data-v-207f4792] {\n  display: flex;\n  height: 1.5rem;\n  margin-bottom: 0.25rem;\n}\n.product-container .product-info .text-info .ratting a[data-v-207f4792] {\n  color: #6b7280;\n  margin-left: 0.5rem;\n  cursor: pointer;\n}\n.product-container .product-info .text-info .price[data-v-207f4792] {\n  width: 100%;\n  display: inline-block;\n  font-family: sans-serif;\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.product-container .product-info .text-info .price span[data-v-207f4792] {\n  font-size: 1.125rem;\n  color: #9ca3af;\n  text-decoration: line-through;\n}\n.product-container .product-info .text-info .stock[data-v-207f4792] {\n  display: inline-block;\n  font-size: 0.75rem;\n  color: #059669;\n  background-color: #d1fae5;\n  padding: 0.2rem 0.5rem;\n  border-radius: 9999px;\n  font-weight: 600;\n  cursor: pointer;\n  margin: 0.5rem 0;\n}\n.product-container .product-info .text-info .stock.out-stock[data-v-207f4792] {\n  color: rgba(220, 38, 38, 0.8);\n  background-color: #fee2e2;\n}\n.product-container .product-info .text-info .description[data-v-207f4792] {\n  width: 100%;\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.75rem;\n  margin-bottom: 1rem;\n  max-height: 300px;\n  padding-right: 1rem;\n  overflow: auto;\n}\n.product-container .product-info .text-info .description[data-v-207f4792]::-webkit-scrollbar {\n  width: 5px;\n  background-color: #f5f5f5;\n}\n.product-container .product-info .text-info .add-btn[data-v-207f4792] {\n  display: inline-block;\n  cursor: pointer;\n  background-color: #10b981;\n  color: #fff;\n  font-weight: 600;\n  font-family: sans-serif;\n  border-radius: 7px;\n  transition: 0.25s;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  padding: 0.75rem 2rem;\n}\n.product-container .product-info .text-info .add-btn[data-v-207f4792]:hover {\n  background-color: #059669;\n}\n.product-container .product-info .text-info .category[data-v-207f4792] {\n  margin-top: 0.5rem;\n  color: #374151;\n  font-weight: 600;\n  font-family: sans-serif;\n  font-size: 0.85rem;\n  line-height: 1.75rem;\n}\n.product-container .product-info .text-info .category span[data-v-207f4792] {\n  color: #6b7280;\n  font-size: 0.85rem;\n}\n.product-container .product-info .text-info .list-key[data-v-207f4792] {\n  width: 100%;\n  margin: 0.5rem 0;\n}\n.product-container .product-info .text-info .list-key small[data-v-207f4792] {\n  display: inline-block;\n  padding: 3px 0.5rem;\n  background-color: #e5e7eb;\n  color: #6b7280;\n  font-weight: 600;\n  font-size: 0.75rem;\n  margin-right: 5px;\n  border-radius: 9999px;\n}\n.product-container .product-info .text-info .share[data-v-207f4792] {\n  margin-top: 2rem;\n}\n.product-container .product-info .text-info .share .title[data-v-207f4792] {\n  font-size: 1rem;\n  font-family: sans-serif;\n  line-height: 1.5rem;\n  font-weight: 600;\n}\n.product-container .product-info .text-info .share p[data-v-207f4792] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-family: sans-serif;\n}\n.product-container .product-info .text-info .share .social-icon[data-v-207f4792] {\n  display: flex;\n  margin-top: 1rem;\n}\n.product-container .product-info .text-info .share .social-icon .follow-link[data-v-207f4792] {\n  cursor: pointer;\n  margin-left: 0.5rem;\n  width: 30px;\n  height: auto;\n}\n.product-container .product-info .introduce[data-v-207f4792] {\n  padding: 2rem;\n  background-color: #f9fafb;\n  border: 1px solid #f3f4f6;\n  border-radius: 10px;\n}\n.product-container .product-info .introduce .item[data-v-207f4792] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0.75rem 0;\n}\n.product-container .product-info .introduce .item .dark-icon[data-v-207f4792] {\n  width: 25px;\n  max-width: 25px;\n  min-width: 25px;\n  height: auto;\n}\n.product-container .product-info .introduce .item .dark-icon[data-v-207f4792]  path {\n  stroke-width: 10;\n}\n.product-container .product-info .introduce .item p[data-v-207f4792] {\n  color: #6b7280;\n  line-height: 1.25rem;\n  font-size: 0.875rem;\n  margin-left: 0.5rem;\n}\n.product-container .product-info .introduce .item p span[data-v-207f4792] {\n  font-weight: 700;\n  font-family: sans-serif;\n}\n.product-container .title[data-v-207f4792] {\n  font-weight: 550;\n  font-size: 1.125rem;\n  font-family: sans-serif;\n  text-transform: capitalize;\n}\n.product-container .replies[data-v-207f4792] {\n  border-radius: 10px;\n  background-color: #fff;\n  margin: 1rem 0;\n  display: flex;\n  justify-content: flex-start;\n  gap: 2rem;\n}\n@media (max-width: 1024px) {\n.product-container .replies[data-v-207f4792] {\n    gap: initial;\n}\n}\n@media (max-width: 860px) {\n.product-container .replies[data-v-207f4792] {\n    flex-direction: column;\n}\n}\n.product-container .replies .no-reviews[data-v-207f4792] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-height: 200px;\n}\n.product-container .replies .no-reviews svg[data-v-207f4792] {\n  width: 50px;\n  fill: #ccc;\n}\n.product-container .replies .no-reviews p[data-v-207f4792] {\n  margin: 1rem 0;\n  color: #4b5563;\n  font-size: 0.9rem;\n}\n.product-container .replies .left[data-v-207f4792] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 138px;\n  width: 100%;\n  min-width: 310px;\n  max-width: 310px;\n  max-height: 400px;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (max-width: 860px) {\n.product-container .replies .left[data-v-207f4792] {\n    max-width: 100%;\n    position: initial;\n    flex-direction: row;\n}\n}\n@media (max-width: 600px) {\n.product-container .replies .left[data-v-207f4792] {\n    padding: 1rem;\n}\n}\n@media (max-width: 500px) {\n.product-container .replies .left[data-v-207f4792] {\n    max-width: 100%;\n    position: initial;\n    flex-direction: column;\n    padding: 0.5rem;\n}\n}\n.product-container .replies .left .chart .item[data-v-207f4792] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 0.8rem;\n  color: #bbb;\n  line-height: 1.1rem;\n}\n.product-container .replies .left .chart .item .full[data-v-207f4792] {\n  min-width: 150px;\n  display: block;\n  height: 6px;\n  border-radius: 9999px;\n  background-color: #f9fafb;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  overflow: hidden;\n}\n.product-container .replies .left .chart .item .full .part[data-v-207f4792] {\n  display: block;\n  height: 100%;\n  width: 0%;\n  background-color: #4b5563;\n  border-radius: 9999px;\n}\n.product-container .replies .left .chart .total[data-v-207f4792] {\n  width: 100%;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: flex-start;\n}\n.product-container .replies .left .chart .total p[data-v-207f4792] {\n  font-weight: 600;\n  font-family: sans-serif;\n  font-size: 1.875rem;\n  margin-right: 1rem;\n  color: #000;\n}\n.product-container .replies .left .chart .total .total-review-point[data-v-207f4792] {\n  flex: 1;\n  font-size: 0.8rem;\n  color: #4b5563;\n  line-height: 1.2rem;\n}\n.product-container .replies .left .sort[data-v-207f4792] {\n  width: 100%;\n}\n.product-container .replies .left .sort .fill-with[data-v-207f4792] {\n  width: 100%;\n  line-height: 2rem;\n  font-size: 1rem;\n  font-weight: normal;\n}\n.product-container .replies .left .sort input[data-v-207f4792] {\n  display: none;\n}\n.product-container .replies .left .sort .option[data-v-207f4792] {\n  width: 100%;\n  margin-top: 0.5rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 0.5rem;\n}\n.product-container .replies .left .sort .option label[data-v-207f4792] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #4b5563;\n  padding: 0.5rem 1.2rem;\n  background-color: #f9fafb;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  font-family: sans-serif;\n  cursor: pointer;\n}\n.product-container .replies .left .sort .option label .dark-icon[data-v-207f4792] {\n  margin-right: 0.5rem;\n  width: 20px;\n}\n.product-container .replies .left .sort .option label .dark-icon[data-v-207f4792]  path {\n  fill: #1a94ff;\n}\n.product-container .replies .left .sort .option label.active[data-v-207f4792] {\n  background-color: #f9fafb;\n  border: 1px solid #1a94ff;\n  color: #1a94ff;\n}\n.product-container .replies .left .sort .option label .star[data-v-207f4792] {\n  margin-top: 4px;\n  margin-left: 0.25rem;\n}\n.product-container .replies .right[data-v-207f4792] {\n  flex: 1;\n  padding: 2rem;\n}\n.product-container .replies .right .list-reviews[data-v-207f4792] {\n  position: relative;\n  min-height: 325px;\n}\n@media (max-width: 600px) {\n.product-container .replies .right[data-v-207f4792] {\n    padding: 1rem;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/Product.vue?vue&type=style&index=0&id=207f4792&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/Product.vue?vue&type=style&index=0&id=207f4792&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_207f4792_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=style&index=0&id=207f4792&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/Product.vue?vue&type=style&index=0&id=207f4792&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_207f4792_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_207f4792_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Vue/views/Product.vue":
/*!********************************************!*\
  !*** ./resources/js/Vue/views/Product.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue_vue_type_template_id_207f4792_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=207f4792&scoped=true& */ "./resources/js/Vue/views/Product.vue?vue&type=template&id=207f4792&scoped=true&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/Vue/views/Product.vue?vue&type=script&lang=js&");
/* harmony import */ var _Product_vue_vue_type_style_index_0_id_207f4792_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=207f4792&lang=scss&scoped=true& */ "./resources/js/Vue/views/Product.vue?vue&type=style&index=0&id=207f4792&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_207f4792_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Product_vue_vue_type_template_id_207f4792_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "207f4792",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Vue/views/Product.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Vue/views/Product.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Vue/views/Product.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/Product.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Vue/views/Product.vue?vue&type=style&index=0&id=207f4792&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Vue/views/Product.vue?vue&type=style&index=0&id=207f4792&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_207f4792_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=style&index=0&id=207f4792&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/Product.vue?vue&type=style&index=0&id=207f4792&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Vue/views/Product.vue?vue&type=template&id=207f4792&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Vue/views/Product.vue?vue&type=template&id=207f4792&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_207f4792_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_207f4792_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_207f4792_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=template&id=207f4792&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/Product.vue?vue&type=template&id=207f4792&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/Product.vue?vue&type=template&id=207f4792&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Vue/views/Product.vue?vue&type=template&id=207f4792&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _c(
      "p",
      { staticClass: "link" },
      [
        _c("span", [_vm._v("Home ")]),
        _vm._v(" "),
        _c("svg-vue", {
          staticClass: "dark-icon",
          attrs: { icon: "right-chevron" },
        }),
        _vm._v(" "),
        _c("span", [_vm._v(_vm._s(_vm.specificProduct.subCategory))]),
        _vm._v(" "),
        _c("svg-vue", {
          staticClass: "dark-icon",
          attrs: { icon: "right-chevron" },
        }),
        _vm._v("\n    " + _vm._s(_vm.specificProduct.name) + "\n  "),
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "content" }, [
      _c("div", { staticClass: "product-info" }, [
        _c("div", { staticClass: "image" }, [
          _c("img", {
            attrs: { src: _vm.specificProduct.image, alt: "image" },
          }),
          _vm._v(" "),
          _vm.specificProduct.discount
            ? _c("div", { staticClass: "discount-info" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.specificProduct.discount) +
                    "% Off\n        "
                ),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "text-info" }, [
          _c("h3", { staticClass: "title" }, [
            _vm._v(_vm._s(_vm.specificProduct.name)),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "ratting" },
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
              _vm._v(" "),
              _c("a", { attrs: { href: "#scroll-to-replies" } }, [
                _vm._v(
                  "( watch " + _vm._s(_vm.totalStars.length) + " reviews )"
                ),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "price" }, [
            _vm._v(
              "\n          $" +
                _vm._s(_vm.specificProduct.price) +
                "\n          "
            ),
            _vm.specificProduct.discount
              ? _c("span", [
                  _vm._v("$" + _vm._s(_vm.specificProduct.original_price)),
                ])
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              class: [
                _vm.specificProduct.stock_info === "out stock"
                  ? "out-stock"
                  : "",
                "stock",
              ],
            },
            [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.specificProduct.stock_info) +
                  "\n        "
              ),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "description" }, [
            _vm._v(
              "\n          " +
                _vm._s(_vm.specificProduct.description) +
                "\n        "
            ),
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "add-btn", on: { click: _vm.add } }, [
            _vm._v("Add To Cart"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "category" }, [
            _vm._v("\n          Category: "),
            _c("span", [_vm._v(_vm._s(_vm.specificProduct.category))]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "list-key" }, [
            _c("small", [_vm._v(_vm._s(_vm.specificProduct.name) + " ")]),
            _vm._v(" "),
            _c("small", [_vm._v(_vm._s(_vm.specificProduct.category))]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "share", attrs: { id: "scroll-to-replies" } },
            [
              _c("p", { staticClass: "title" }, [
                _vm._v("Share your social network"),
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            For get lots of traffic from social network share this product\n          "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "social-icon" }, [
                _c(
                  "a",
                  {
                    staticClass: "follow-link",
                    attrs: {
                      href: "https://www.facebook.com/",
                      target: "blank",
                    },
                  },
                  [
                    _c("svg-vue", {
                      staticClass: "dark-icon",
                      attrs: { icon: "facebook" },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "follow-link",
                    attrs: {
                      href: "https://twitter.com/?lang=vi",
                      target: "blank",
                    },
                  },
                  [
                    _c("svg-vue", {
                      staticClass: "dark-icon",
                      attrs: { icon: "twitter" },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "follow-link",
                    attrs: {
                      href: "https://www.youtube.com/",
                      target: "blank",
                    },
                  },
                  [
                    _c("svg-vue", {
                      staticClass: "dark-icon",
                      attrs: { icon: "youtube" },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "follow-link",
                    attrs: {
                      href: "https://www.linkedin.com/",
                      target: "blank",
                    },
                  },
                  [
                    _c("svg-vue", {
                      staticClass: "dark-icon",
                      attrs: { icon: "linkedin" },
                    }),
                  ],
                  1
                ),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "introduce" }, [
          _c(
            "div",
            { staticClass: "item" },
            [
              _c("svg-vue", {
                staticClass: "dark-icon",
                attrs: { icon: "truck", viewBox: "20 0 550 550" },
              }),
              _vm._v(" "),
              _vm._m(0),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item" },
            [
              _c("svg-vue", {
                staticClass: "dark-icon",
                attrs: { icon: "home-1", viewBox: "0 0 650 650" },
              }),
              _vm._v(" "),
              _vm._m(1),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item" },
            [
              _c("svg-vue", {
                staticClass: "dark-icon",
                attrs: { icon: "dollar", viewBox: "150 0 950 950" },
              }),
              _vm._v(" "),
              _c("p", [_vm._v("Cash on Delivery Available")]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item" },
            [
              _c("svg-vue", {
                staticClass: "dark-icon",
                attrs: { icon: "pending", viewBox: "0 -5 35 35" },
              }),
              _vm._v(" "),
              _vm._m(2),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item" },
            [
              _c("svg-vue", {
                staticClass: "dark-icon",
                attrs: { icon: "shield", viewBox: "0 -100 600 600" },
              }),
              _vm._v(" "),
              _c("p", [_vm._v("Warranty not available this item")]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item" },
            [
              _c("svg-vue", {
                staticClass: "dark-icon",
                attrs: { icon: "sun" },
              }),
              _vm._v(" "),
              _c("p", [
                _vm._v("Guaranteed 100% organic from natural products."),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item" },
            [
              _c("svg-vue", {
                staticClass: "dark-icon",
                attrs: { icon: "location", viewBox: "0 0 400 400" },
              }),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            Delivery from our pick point Cecilia Chapman, 561-4535 Nulla LA,\n            United States 96522\n          "
                ),
              ]),
            ],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "title" }, [_vm._v("Reviews From Customers")]),
      _vm._v(" "),
      _c("div", { staticClass: "replies" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.hasReviews,
                expression: "!hasReviews",
              },
            ],
            staticClass: "no-reviews",
          },
          [
            _c("svg-vue", { attrs: { icon: "smile-star" } }),
            _vm._v(" "),
            _c("p", [_vm._v("Has no reviews for this product yet")]),
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
                value: _vm.hasReviews,
                expression: "hasReviews",
              },
            ],
            staticClass: "left",
          },
          [
            _c("div", { staticClass: "chart" }, [
              _c("div", { staticClass: "item total" }, [
                _c("p", [_vm._v(_vm._s(_vm.averageStar))]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "total-review-point" },
                  [
                    _c("star-rating", {
                      attrs: {
                        "star-size": 15,
                        rating: Number(_vm.averageStar),
                        "read-only": true,
                        "show-rating": false,
                        increment: 0.01,
                        "border-width": 3,
                        "border-color": "orange",
                        padding: Number(7),
                        "inactive-color": "#fff",
                        "star-points": [
                          23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50,
                          36, 34, 46, 19, 31, 17,
                        ],
                      },
                    }),
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.reviews.total) +
                        " Reviews\n            "
                    ),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "item" },
                [
                  _c("star-rating", {
                    attrs: {
                      "star-size": 8,
                      rating: 5,
                      "read-only": true,
                      "show-rating": false,
                      "border-width": 3,
                      "inactive-color": "",
                      "active-border-color": "orange",
                      "star-points": [
                        23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36,
                        34, 46, 19, 31, 17,
                      ],
                    },
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "full" }, [
                    _c("small", {
                      staticClass: "part",
                      style: "width : " + _vm.fiveStarPercent + "%",
                    }),
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.fiveStarAmount))]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "item" },
                [
                  _c("star-rating", {
                    attrs: {
                      "star-size": 8,
                      rating: 4,
                      "read-only": true,
                      "show-rating": false,
                      "border-width": 3,
                      "active-border-color": "orange",
                      "star-points": [
                        23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36,
                        34, 46, 19, 31, 17,
                      ],
                    },
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "full" }, [
                    _c("small", {
                      staticClass: "part",
                      style: "width : " + _vm.fourStarPercent + "%",
                    }),
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.fourStarAmount))]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "item" },
                [
                  _c("star-rating", {
                    attrs: {
                      "star-size": 8,
                      rating: 3,
                      "read-only": true,
                      "show-rating": false,
                      "border-width": 3,
                      "active-border-color": "orange",
                      "star-points": [
                        23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36,
                        34, 46, 19, 31, 17,
                      ],
                    },
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "full" }, [
                    _c("small", {
                      staticClass: "part",
                      style: "width : " + _vm.threeStarPercent + "%",
                    }),
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.threeStarAmount))]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "item" },
                [
                  _c("star-rating", {
                    attrs: {
                      "star-size": 8,
                      rating: 2,
                      "read-only": true,
                      "show-rating": false,
                      "border-width": 3,
                      "active-border-color": "orange",
                      "star-points": [
                        23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36,
                        34, 46, 19, 31, 17,
                      ],
                    },
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "full" }, [
                    _c("small", {
                      staticClass: "part",
                      style: "width : " + _vm.twoStarPercent + "%",
                    }),
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.twoStarAmount))]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "item" },
                [
                  _c("star-rating", {
                    attrs: {
                      "star-size": 8,
                      rating: 1,
                      "read-only": true,
                      "show-rating": false,
                      "border-width": 3,
                      "active-border-color": "orange",
                      "star-points": [
                        23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36,
                        34, 46, 19, 31, 17,
                      ],
                    },
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "full" }, [
                    _c("small", {
                      staticClass: "part",
                      style: "width : " + _vm.oneStarPercent + "%",
                    }),
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.oneStarAmount))]),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "sort" }, [
              _c("h3", { staticClass: "fill-with" }, [_vm._v("Filter with:")]),
              _vm._v(" "),
              _c("div", { staticClass: "option" }, [
                _c(
                  "label",
                  { class: { active: _vm.fiveStars }, attrs: { id: "5stars" } },
                  [
                    _c("svg-vue", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.fiveStars,
                          expression: "fiveStars",
                        },
                      ],
                      staticClass: "dark-icon",
                      attrs: { icon: "correct", viewBox: "-100 -50 500 500" },
                    }),
                    _vm._v("\n              5\n              "),
                    _c("star-rating", {
                      staticClass: "star",
                      attrs: {
                        "star-size": 13,
                        "read-only": true,
                        "show-rating": false,
                        "max-rating": 1,
                        rating: _vm.fiveStars ? 1 : 0,
                        "border-width": 3,
                        "border-color": "#bbb",
                        "active-border-color": "orange",
                        "star-points": [
                          23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50,
                          36, 34, 46, 19, 31, 17,
                        ],
                      },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userOptions,
                          expression: "userOptions",
                        },
                      ],
                      attrs: { type: "checkbox", id: "5stars", value: "5" },
                      domProps: {
                        checked: Array.isArray(_vm.userOptions)
                          ? _vm._i(_vm.userOptions, "5") > -1
                          : _vm.userOptions,
                      },
                      on: {
                        click: _vm.toggleFiveStars,
                        change: function ($event) {
                          var $$a = _vm.userOptions,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = "5",
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.userOptions = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.userOptions = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.userOptions = $$c
                          }
                        },
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "label",
                  { class: { active: _vm.fourStars }, attrs: { id: "4stars" } },
                  [
                    _c("svg-vue", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.fourStars,
                          expression: "fourStars",
                        },
                      ],
                      staticClass: "dark-icon",
                      attrs: { icon: "correct", viewBox: "-100 -50 500 500" },
                    }),
                    _vm._v("\n              4\n              "),
                    _c("star-rating", {
                      staticClass: "star",
                      attrs: {
                        "star-size": 13,
                        "read-only": true,
                        "show-rating": false,
                        "max-rating": 1,
                        rating: _vm.fourStars ? 1 : 0,
                        "border-width": 3,
                        "border-color": "#bbb",
                        "active-border-color": "orange",
                        "star-points": [
                          23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50,
                          36, 34, 46, 19, 31, 17,
                        ],
                      },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userOptions,
                          expression: "userOptions",
                        },
                      ],
                      attrs: { type: "checkbox", id: "4stars", value: "4" },
                      domProps: {
                        checked: Array.isArray(_vm.userOptions)
                          ? _vm._i(_vm.userOptions, "4") > -1
                          : _vm.userOptions,
                      },
                      on: {
                        click: _vm.toggleFourStars,
                        change: function ($event) {
                          var $$a = _vm.userOptions,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = "4",
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.userOptions = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.userOptions = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.userOptions = $$c
                          }
                        },
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    class: { active: _vm.threeStars },
                    attrs: { id: "3stars" },
                  },
                  [
                    _c("svg-vue", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.threeStars,
                          expression: "threeStars",
                        },
                      ],
                      staticClass: "dark-icon",
                      attrs: { icon: "correct", viewBox: "-100 -50 500 500" },
                    }),
                    _vm._v("\n              3\n              "),
                    _c("star-rating", {
                      staticClass: "star",
                      attrs: {
                        "star-size": 13,
                        "read-only": true,
                        "show-rating": false,
                        "max-rating": 1,
                        rating: _vm.threeStars ? 1 : 0,
                        "border-width": 3,
                        "border-color": "#bbb",
                        "active-border-color": "orange",
                        "star-points": [
                          23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50,
                          36, 34, 46, 19, 31, 17,
                        ],
                      },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userOptions,
                          expression: "userOptions",
                        },
                      ],
                      attrs: { type: "checkbox", id: "3stars", value: "3" },
                      domProps: {
                        checked: Array.isArray(_vm.userOptions)
                          ? _vm._i(_vm.userOptions, "3") > -1
                          : _vm.userOptions,
                      },
                      on: {
                        click: _vm.toggleThreeStars,
                        change: function ($event) {
                          var $$a = _vm.userOptions,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = "3",
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.userOptions = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.userOptions = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.userOptions = $$c
                          }
                        },
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "label",
                  { class: { active: _vm.twoStars }, attrs: { id: "2stars" } },
                  [
                    _c("svg-vue", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.twoStars,
                          expression: "twoStars",
                        },
                      ],
                      staticClass: "dark-icon",
                      attrs: { icon: "correct", viewBox: "-100 -50 500 500" },
                    }),
                    _vm._v("\n              2\n              "),
                    _c("star-rating", {
                      staticClass: "star",
                      attrs: {
                        "star-size": 13,
                        "read-only": true,
                        "show-rating": false,
                        "max-rating": 1,
                        rating: _vm.twoStars ? 1 : 0,
                        "border-width": 3,
                        "border-color": "#bbb",
                        "active-border-color": "orange",
                        "star-points": [
                          23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50,
                          36, 34, 46, 19, 31, 17,
                        ],
                      },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userOptions,
                          expression: "userOptions",
                        },
                      ],
                      attrs: { type: "checkbox", id: "2stars", value: "2" },
                      domProps: {
                        checked: Array.isArray(_vm.userOptions)
                          ? _vm._i(_vm.userOptions, "2") > -1
                          : _vm.userOptions,
                      },
                      on: {
                        click: _vm.toggleTwoStars,
                        change: function ($event) {
                          var $$a = _vm.userOptions,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = "2",
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.userOptions = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.userOptions = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.userOptions = $$c
                          }
                        },
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "label",
                  { class: { active: _vm.oneStars }, attrs: { id: "1stars" } },
                  [
                    _c("svg-vue", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.oneStars,
                          expression: "oneStars",
                        },
                      ],
                      staticClass: "dark-icon",
                      attrs: { icon: "correct", viewBox: "-100 -50 500 500" },
                    }),
                    _vm._v("\n              1\n              "),
                    _c("star-rating", {
                      staticClass: "star",
                      attrs: {
                        "star-size": 13,
                        "read-only": true,
                        "show-rating": false,
                        "max-rating": 1,
                        rating: _vm.oneStars ? 1 : 0,
                        "border-width": 3,
                        "border-color": "#bbb",
                        "active-border-color": "orange",
                        "star-points": [
                          23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50,
                          36, 34, 46, 19, 31, 17,
                        ],
                      },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userOptions,
                          expression: "userOptions",
                        },
                      ],
                      attrs: { type: "checkbox", id: "1stars", value: "1" },
                      domProps: {
                        checked: Array.isArray(_vm.userOptions)
                          ? _vm._i(_vm.userOptions, "1") > -1
                          : _vm.userOptions,
                      },
                      on: {
                        click: _vm.toggleOneStars,
                        change: function ($event) {
                          var $$a = _vm.userOptions,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = "1",
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.userOptions = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.userOptions = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.userOptions = $$c
                          }
                        },
                      },
                    }),
                  ],
                  1
                ),
              ]),
            ]),
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
                value: _vm.hasReviews,
                expression: "hasReviews",
              },
            ],
            staticClass: "right",
          },
          [
            _c(
              "div",
              { staticClass: "list-reviews" },
              [
                _vm._l(_vm.reviews.data, function (item, index) {
                  return _c("Review", { key: index, attrs: { review: item } })
                }),
                _vm._v(" "),
                _vm.isShowLoading ? _c("loading") : _vm._e(),
              ],
              2
            ),
            _vm._v(" "),
            _vm.moreThanOnePage
              ? _c("Pagination", {
                  attrs: { pageNumber: Number(_vm.reviews.last_page) },
                  on: { paginate: _vm.paginate },
                })
              : _vm._e(),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("\n            Free shipping apply to all orders over shipping "),
      _c("span", [_vm._v("$100")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Home Delivery within "),
      _c("span", [_vm._v("1 Hour")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("span", [_vm._v("7")]),
      _vm._v(" Days returns money back guarantee"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);