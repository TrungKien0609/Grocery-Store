<template>
  <div class="products-discount-container">
    <div class="product-list">
      <Product
        v-for="(product, index) in discountProducts.data"
        :key="index"
        :product="product"
      />
      <loading v-if="isShowLoading" />
    </div>
    <Paginate
      v-if="moreThanOnePage"
      @paginate="paginate"
      :pageNumber="Number(discountProducts.last_page)"
    />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ProductsDiscount",
  components: {
    Product : () => import('./Product.vue'),
    Paginate : () => import('../components/Pagination.vue'),
    Loading: () => import('../components/LoadingEffect.vue')
  },
  data() {
    return {
      isShowLoading: null,
      moreThanOnePage: false,
    };
  },
  created() {
    this.getDiscountProducts(1).then((res) => {
      this.moreThanOnePage = this.discountProducts.last_page > 1 ? true : false;
    });
  },
  methods: {
    ...mapActions(["getDiscountProducts"]),
    paginate(pageNum) {
      this.isShowLoading = true;
      this.getDiscountProducts(pageNum).then((res) => {
        this.isShowLoading = false;
        this.moreThanOnePage =
          this.discountProducts.last_page > 1 ? true : false;
      });
    },
  },
  computed: {
    ...mapState(["discountProducts"]),
  },
};
</script>
<style lang="scss" scoped>
.products-discount-container {
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
