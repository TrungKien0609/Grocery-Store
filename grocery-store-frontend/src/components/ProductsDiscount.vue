<template>
  <div class="products-discount-container">
    <Product
      v-for="(product, index) in products"
      :key="index"
      :unit="product.unit"
      :name="product.name"
      :price="product.price"
      :buyAmount="product.buyAmount"
      :discountPrice="product.discountPrice"
      :discount="product.discount"
    />
  </div>
</template>
<script>
import Product from "./Product.vue";
export default {
  name: "ProductsDiscount",
  components: {
    Product,
  },
  data() {
    return {
      products: [
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: "$14",
          discountPrice: "$12",
          buyAmount: "0",
          discount: "17% Off",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: "$14",
          discountPrice: "$12",
          buyAmount: "0",
          discount: "17% Off",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: "$14",
          discountPrice: "$12",
          buyAmount: "0",
          discount: "17% Off",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: "$14",
          discountPrice: "$12",
          buyAmount: "0",
          discount: "17% Off",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: "$14",
          discountPrice: "$12",
          buyAmount: "0",
          discount: "17% Off",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: "$14",
          discountPrice: "$12",
          buyAmount: "0",
          discount: "17% Off",
        },
        {
          link: "",
          unit: "each",
          name: "Green Leaf Lettuce",
          price: "$14",
          discountPrice: "$12",
          buyAmount: "0",
          discount: "17% Off",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.products-discount-container {
  width: 100%;
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
</style>
