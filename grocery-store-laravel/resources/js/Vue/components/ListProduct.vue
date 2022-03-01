<template>
  <div class="list-product-container">
    <div class="product-list">
      <Product
        v-for="(product, index) in products.data"
        :key="index"
        :product="product"
      />
      <loading v-if="isShowLoading" />
    </div>
    <Paginate
      v-if="moreThanOnePage"
      @paginate="paginate"
      :pageNumber="Number(products.last_page)"
    />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Product from "./Product.vue";
import Paginate from "../components/Pagination.vue";
import Loading from "../components/LoadingEffect.vue";
export default {
  name: "listProduct",
  components: {
    Product,
    Paginate,
    Loading,
  },
  data() {
    return {
      isShowLoading: null,
      moreThanOnePage: false,
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  created() {
    this.getProducts(1).then((res) => {
      this.moreThanOnePage = this.products.last_page > 1 ? true : false;
    });
  },
  methods: {
    ...mapActions(["getProducts"]),
    paginate(pageNum) {
      this.isShowLoading = true;
      this.getProducts(pageNum).then((res) => {
        this.isShowLoading = false;
        this.moreThanOnePage = this.products.last_page > 1 ? true : false;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.list-product-container {
  width: 100%;
  position: relative;
  .product-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }
    grid-gap: 0.5rem;
  }
}
</style>
