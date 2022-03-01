<template>
  <div class="search-container">
    <div class="results">
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
import Category from "../components/Category.vue";
import Product from "../components/Product.vue";
import Paginate from "../components/Pagination.vue";
import Loading from "../components/LoadingEffect.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Search",
  components: {
    Category,
    Product,
    Paginate,
    Loading,
  },
  data() {
    return {
      sort: null,
      result: true,
      isShowLoading: null,
      moreThanOnePage: false,
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
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 1.75rem;
      padding-bottom: 0.5rem;
      font-size: 0.9rem;
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
      margin: 1.25rem 0;
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
      }
    }
  }
}
</style>
