"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[375],{4025:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(1519),n=r.n(a)()((function(e){return e[1]}));n.push([e.id,".search-container[data-v-6cfeb46c]{background-color:#f9fafb;display:flex;gap:2rem;justify-content:space-between;padding:2.5rem}@media (max-width:1024px){.search-container[data-v-6cfeb46c]{flex-direction:column}}@media (max-width:600px){.search-container[data-v-6cfeb46c]{padding:2.5rem 1rem}}.search-container .results[data-v-6cfeb46c]{flex:1;position:relative}.search-container .results .banner[data-v-6cfeb46c]{grid-gap:1rem;background-color:#f9fafb;display:grid;grid-template-columns:repeat(3,1fr);margin-bottom:1rem;position:relative;width:100%}@media (max-width:1024px){.search-container .results .banner[data-v-6cfeb46c]{grid-template-columns:repeat(2,1fr)}}@media (max-width:770px){.search-container .results .banner[data-v-6cfeb46c]{grid-template-columns:repeat(1,1fr)}}.search-container .results .header[data-v-6cfeb46c]{align-items:center;background-color:#ffedd5;border-radius:.3rem;display:flex;font-size:.9rem;justify-content:space-between;line-height:1.75rem;margin-bottom:1rem;padding:.5rem .8rem}.search-container .results .header span[data-v-6cfeb46c]{font-weight:600}.search-container .results .header .sort[data-v-6cfeb46c]{background-color:#fff;border-radius:2px;cursor:pointer;position:relative;width:130px}.search-container .results .header .sort select[data-v-6cfeb46c]{border:none;outline:none;padding:0 .5rem}.search-container .results .body[data-v-6cfeb46c]{grid-gap:.5rem;display:grid;grid-template-columns:repeat(5,1fr);position:relative;width:100%}@media (max-width:1024px){.search-container .results .body[data-v-6cfeb46c]{grid-template-columns:repeat(3,1fr)}}@media (max-width:760px){.search-container .results .body[data-v-6cfeb46c]{grid-template-columns:repeat(2,1fr)}}.search-container .results .no-result[data-v-6cfeb46c]{margin-top:2rem;padding:1.25rem}.search-container .results .no-result svg[data-v-6cfeb46c]{display:block;margin:0 auto;max-width:400px}.search-container .results .no-result .image[data-v-6cfeb46c]{display:block;height:auto;margin:0 auto;max-width:400px;width:100%}.search-container .results .no-result .title[data-v-6cfeb46c]{color:#000;font-family:sans-serif;font-size:1.5rem;font-weight:400;margin-top:2rem;text-align:center}@media (max-width:760px){.search-container .results .no-result .title[data-v-6cfeb46c]{font-size:1.1rem}}",""]);const s=n},5375:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var a=r(629);function n(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u={name:"Search",components:{Category:function(){return r.e(662).then(r.bind(r,9662))},Product:function(){return r.e(239).then(r.bind(r,5239))},Paginate:function(){return r.e(490).then(r.bind(r,8490))},Loading:function(){return r.e(654).then(r.bind(r,8654))},CartIntro:function(){return r.e(422).then(r.bind(r,9422))}},data:function(){return{sort:null,result:!0,isShowLoading:null,moreThanOnePage:!1,banners:[{name:"Fresh & Natural",image:"/images/banner/role1.jpg",key:"fruits-vegetable"},{name:"Fish & Meat",image:"/images/banner/role2.jpg",key:"fish-meat"},{name:"Bread & Bakery",image:"/images/banner/role3.jpg",key:"breakfast"}]}},created:function(){var e=this;this.search({page:1,data:this.$route.query}).then((function(t){e.moreThanOnePage=e.searchResult.last_page>1,0===e.searchResult.data.length&&(e.result=!1,e.moreThanOnePage=!1)}))},updated:function(){this.moreThanOnePage=this.searchResult.last_page>1,0===this.searchResult.data.length&&(this.result=!1,this.moreThanOnePage=!1)},methods:o({sortAction:function(){this.sort=!0,2==this.$refs.select.value&&(this.searchResult.data=n(this.searchResult.data).sort((function(e,t){return t.price-e.price}))),1==this.$refs.select.value&&(this.searchResult.data=n(this.searchResult.data).sort((function(e,t){return e.price-t.price})))},paginate:function(e){var t=this;this.isShowLoading=!0,this.search({page:e,data:this.$route.query}).then((function(e){t.isShowLoading=!1}))}},(0,a.nv)(["search"])),computed:o({},(0,a.rn)(["categories","products","searchResult"])),watch:{$route:function(e,t){var r=this;this.search({page:1,data:this.$route.query}).then((function(e){0===r.searchResult.last_page?r.result=!1:r.result=!0,r.moreThanOnePage=r.searchResult.last_page>1}))}}};var l=r(3379),d=r.n(l),h=r(4025),f={insert:"head",singleton:!1};d()(h.Z,f);h.Z.locals;const p=(0,r(1900).Z)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-container"},[r("div",{staticClass:"results"},[r("div",{staticClass:"banner"},e._l(e.banners,(function(e,t){return r("CartIntro",{key:t,attrs:{item:e}})})),1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.result,expression:"result"}],staticClass:"header"},[r("p",[e._v("\n        Total "),r("span",[e._v(" "+e._s(e.searchResult.total))]),e._v(" items Found\n      ")]),e._v(" "),r("div",{staticClass:"sort"},[r("select",{ref:"select",on:{change:e.sortAction}},[r("option",{directives:[{name:"show",rawName:"v-show",value:!e.sort,expression:"!sort"}],attrs:{value:"0"}},[e._v("Sort by price")]),e._v(" "),r("option",{attrs:{value:"1"}},[e._v("Low to Hight")]),e._v(" "),r("option",{attrs:{value:"2"}},[e._v("Height to low")])])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.result,expression:"result"}],staticClass:"body"},[e._l(e.searchResult.data,(function(e,t){return r("Product",{key:t,attrs:{product:e}})})),e._v(" "),e.isShowLoading?r("loading"):e._e()],2),e._v(" "),e.moreThanOnePage?r("Paginate",{attrs:{pageNumber:Number(e.searchResult.last_page)},on:{paginate:e.paginate}}):e._e(),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.result,expression:"!result"}],staticClass:"no-result"},[r("svg-vue",{attrs:{icon:"no-result",viewBox:"0 0 862 644"}}),e._v(" "),r("h3",{staticClass:"title"},[e._v("Sorry, we can not find this product 😞")])],1)],1)])}),[],!1,null,"6cfeb46c",null).exports}}]);