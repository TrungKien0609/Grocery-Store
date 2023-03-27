<template>
  <div class="search-container">
    <div class="results">
      <div class="banner">
        <CartIntro v-for="(item, index) in banners" :key="index" :item="item" />
      </div>
      <div class="header" v-show="result">
        <p>
          Total <span> {{ searchResult.total }}</span> items Found
        </p>
        <div class="sort">
          <select ref="select" @change="sortAction">
            <option value="0" v-show="!sort">Sort by price</option>
            <option value="1">Low to Hight</option>
            <option value="2">Height to low</option>
          </select>
        </div>
      </div>
      <div class="body" v-show="result">
        <Product
          v-for="(product, index) in searchResult.data"
          :key="index"
          :product="product"
        />
        <loading v-if="isShowLoading" />
      </div>
      <Paginate
        v-if="moreThanOnePage"
        @paginate="paginate"
        :pageNumber="Number(searchResult.last_page)"
      />
      <div class="no-result" v-show="!result">
        <svg-vue icon="no-result" viewBox="0 0 862 644"></svg-vue>
        <h3 class="title">Sorry, we can not find this product 😞</h3>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Search",
  components: {
    Category: () => import("../components/Category.vue"),
    Product: () => import("../components/Product.vue"),
    Paginate: () => import("../components/Pagination.vue"),
    Loading: () => import("../components/LoadingEffect.vue"),
    CartIntro: () => import("../components/CardIntro.vue"),
  },
  data() {
    return {
      sort: null,
      result: true,
      isShowLoading: null,
      moreThanOnePage: false,
      banners: [
        {
          name: "Fresh & Natural",
          image: "/images/banner/role1.jpg",
          key: "fresh-vegetable",
        },
        {
          name: "Fish & Meat",
          image: "/images/banner/role2.jpg",
          key: "fish-meat",
        },
        {
          name: "Bread & Bakery",
          image: "/images/banner/role3.jpg",
          key: "biscuits--cakes",
        },
      ],
    };
  },
  created() {
    this.search({
      page: 1,
      data: this.$route.query,
    }).then((res) => {
      if (this.searchResult.data.length === 0) {
        this.result = false;
      }
      this.moreThanOnePage = this.searchResult.last_page > 1 ? true : false;
    });
  },
  updated() {
    if (this.searchResult.data.length === 0) {
      this.result = false;
    }
  },
  methods: {
    sortAction() {
      this.sort = true;
      if (this.$refs.select.value == 2) {
        this.searchResult.data = [...this.searchResult.data].sort(
          (a, b) => b.price - a.price
        );
      }
      if (this.$refs.select.value == 1) {
        this.searchResult.data = [...this.searchResult.data].sort(
          (a, b) => a.price - b.price
        );
      }
    },
    paginate(pageNum) {
      this.isShowLoading = true;
      this.search({
        page: pageNum,
        data: this.$route.query,
      }).then((res) => {
        this.isShowLoading = false;
        this.moreThanOnePage = this.searchResult.data.length > 1 ? true : false;
      });
    },
    ...mapActions(["search"]),
  },
  computed: {
    ...mapState(["categories", "products", "searchResult"]),
  },
  watch: {
    $route(to, from) {
      this.search({
        page: 1,
        data: this.$route.query,
      }).then((res) => {
        if (this.searchResult.last_page === 0) {
          this.result = false;
        } else {
          this.result = true;
        }
        this.moreThanOnePage = this.searchResult.last_page > 1 ? true : false;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.search-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  background-color: rgb(249 250 251);
  padding: 2.5rem;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 2.5rem 1rem;
  }
  .results {
    flex: 1;
    position: relative;
    .banner {
      width: 100%;
      position: relative;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;
      background-color: rgb(249 250 251);
      margin-bottom: 1rem;
      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 770px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 1.75rem;
      padding: 0.5rem 0.8rem;
      border-radius: 0.3rem;
      font-size: 0.9rem;
      background-color: rgb(255 237 213);
      margin-bottom: 1rem;
      span {
        font-weight: 600;
      }
      .sort {
        position: relative;
        background-color: #fff;
        border-radius: 2px;
        width: 130px;
        cursor: pointer;
        select {
          padding: 0 0.5rem;
          outline: none;
          border: none;
        }
      }
    }
    .body {
      width: 100%;
      position: relative;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: 760px) {
        grid-template-columns: repeat(2, 1fr);
      }
      grid-gap: 0.5rem;
    }
    .no-result {
      padding: 1.25rem;
      margin-top: 2rem;
      svg {
        max-width: 400px;
        display: block;
        margin: 0 auto;
      }
      .image {
        margin: 0 auto;
        width: 100%;
        max-width: 400px;
        height: auto;
        display: block;
      }
      .title {
        margin-top: 2rem;
        color: #000;
        text-align: center;
        font-size: 1.5rem;
        font-weight: normal;
        font-family: sans-serif;
        @media (max-width: 760px) {
          font-size: 1.1rem;
        }
      }
    }
  }
}
</style>
